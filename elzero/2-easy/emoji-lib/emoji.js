class EmojiPicker extends HTMLElement {
    picker;
    search;
    tabs;
    tabBody;

    constructor() {
      super();
    }

    connectedCallback() {
        var shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.createPicker());
        shadow.appendChild(this.createStyle());
    }

    createPicker() {
        this.picker = document.createElement("div");
        this.picker.classList.add("emoji-picker");

        this.search = document.createElement("input");
        this.search.setAttribute("id", "emoji-search");
        this.search.setAttribute("name", "emoji-search");
        this.search.setAttribute("type", "text");
        this.search.setAttribute("placeholder", "Search");
        this.search.classList.add("search");
        this.search.onkeyup = e => this.filterEmojis(e);

        this.tabs = document.createElement("div");
        this.tabs.classList.add("tabs");

        this.tabBody = document.createElement("div");
        this.tabBody.classList.add("tab-body");

        this.picker.append(this.search, this.tabs, this.tabBody);

        this.renderEmojis();
        return this.picker;
    }

    filterEmojis(e) {
        let hiddenEmojis = this.picker.querySelectorAll(".tab-body .collection.visible .emoji.hidden");
        hiddenEmojis.forEach(elem => elem.classList.remove("hidden"));

        let searchTerm = e.target.value.trim().toLowerCase();
        let visibleEmojis = this.picker.querySelectorAll(".tab-body .collection.visible .emoji");
        Array.from(visibleEmojis)
        .filter(elem => {
            let tags = elem.getAttribute("tags").split(",");
            return !tags.reduce((acc, curr) => acc || curr.startsWith(searchTerm), false )
        }).forEach(elem => {
            elem.classList.add("hidden");
        });
    }

    async renderEmojis() {
        // will be needed for nested functions
        let emojiPickerRef = this;
        let picker = this.picker;
        let tabs = this.tabs;
        let tabBody = this.tabBody;

        fetch("./emoji-lib/emoji.json")
        .then(file => file.json())
        .then(json => groupByCategory(json))
        .then(map => renderTabsAndBody(map))
        .then(() => registerCallbacks());

        function groupByCategory(json) {
            let m = new Map();
            json.forEach((obj) => {
                if(!m.has(obj.category)) {
                    m.set(obj.category, []);
                }
                m.get(obj.category).push(obj);
            })
            return m;
        }

        function renderTabsAndBody(map) {
            map.entries().forEach(entry => {
                let catName = entry[0];
                let emojisArr = entry[1];

                tabs.appendChild(createTab(catName, emojisArr[0].emoji));
                tabBody.appendChild(createCollection(catName, emojisArr));
            });
            tabs.firstChild.classList.add("active");
            tabBody.firstChild.classList.add("visible");
        }

        function createTab(name, emoji) {
            let tab = document.createElement("span");
            tab.classList.add("tab", "emoji");
            tab.setAttribute("category", name);
            tab.innerHTML = emoji;
            return tab;
        }
    
        function createCollection(name, emojisArr) {
            let collection = document.createElement("div");
            collection.classList.add("collection");
            collection.setAttribute("category", name);
    
            emojisArr.forEach(emojiObj => {
                let emojiElem = document.createElement("span");
                emojiElem.classList.add("emoji");
                emojiElem.setAttribute("tags", emojiObj.tags.join(","));
                emojiElem.innerHTML = emojiObj.emoji;
                collection.appendChild(emojiElem);
            });
    
            return collection;
        }

        function registerCallbacks() {
            picker.querySelectorAll(".tab.emoji").forEach(tab => {
                tab.onclick = () => tabClickCallback(tab);
            });
    
            picker.querySelectorAll(".collection .emoji").forEach(emoji => {
                emoji.onclick = () => emojiClickCallback(emoji);
            });
        }
    
        function tabClickCallback(clickedTab) {
            let prevActiveTab = picker.querySelector(".tab.active");
            if(isDifferentTabSelected(clickedTab, prevActiveTab)) {
                prevActiveTab.classList.remove("active");
                getTabContent(prevActiveTab).classList.remove("visible");
                
                resetSearchFilter(prevActiveTab);

                clickedTab.classList.add("active");
                getTabContent(clickedTab).classList.add("visible");
            }
        }

        function isDifferentTabSelected(tab, prevActiveTab) {
            return tab !== prevActiveTab
        }
    
        function resetSearchFilter(tab) {
            picker.querySelector("input").value = '';
            getTabContent(tab).querySelectorAll(".emoji.hidden").forEach(elem => elem.classList.remove("hidden"));
        }

        function getTabContent(tab) {
            let tabCategory = tab.getAttribute("category");
            return picker.querySelector(`.collection[category="${tabCategory}"]`);
        }

        function emojiClickCallback(emoji) {
            const event = new CustomEvent("emoji-picked", { detail: {emojiVal: emoji.innerText} });
            emojiPickerRef.dispatchEvent(event);
        }
    }

    createStyle() {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./emoji-lib/emoji.css";
        return link;
    }

    show() {
        this.picker.classList.add("visible");
        this.search.focus();
    }

    hide() {
        this.picker.classList.remove("visible");
    }
}

window.customElements.define("emoji-picker", EmojiPicker);
