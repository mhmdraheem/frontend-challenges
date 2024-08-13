
// let emojiPicker = createPicker();

// function createPicker() {
//     let picker = document.createElement("div");
//     picker.classList.add("emoji-picker");

//     let search = document.createElement("input");
//     search.setAttribute("id", "emoji-search");
//     search.setAttribute("name", "emoji-search");
//     search.setAttribute("type", "text");
//     search.setAttribute("placeholder", "Search");
//     search.classList.add("search");

//     let tabs = document.createElement("div");
//     tabs.classList.add("tabs");

//     let tabBody = document.createElement("div");
//     tabBody.classList.add("tab-body");

//     picker.append(search, tabs, tabBody);

//     const tabsArr = [
//         { name: "smiles", emoji: "1F600", emojisCount: 48, isVisible: true },
//         { name: "hearts", emoji: "1F493", emojisCount: 13, isVisible: false }
//     ];
    
//     tabsArr.forEach(tab => {
//         tabs.appendChild(createTab(tab.name, tab.emoji, tab.emojisCount, tab.isVisible));
//         tabBody.appendChild(createCollection(tab.name, tab.emoji, tab.emojisCount, tab.isVisible));
//     });

//     return picker;
// }

// function createTab(name, emoji, emojisCount, active) {
//     let tab = document.createElement("span");
//     tab.classList.add("tab", "emoji");
//     if(active) {
//         tab.classList.add("active");
//     }
//     tab.setAttribute("collection-name", name);
//     tab.innerText = hexToEmoji(emoji);
//     return tab;
// }

// function hexToEmoji(hex) {
//     return "&#x" + hex;
// }

// function createCollection(name, emoji, emojisCount, visible) {
//     let collection = document.createElement("div");
//     collection.classList.add("collection", name);
//     if(visible) {
//         collection.classList.add("visible");
//     }

//     for(let i = 0; i < emojisCount; i++) {
//         let emojiElem = document.createElement("span");
//         emojiElem.classList.add("emoji");
//         emojiElem.innerText = hexToEmoji(emoji);
//         emoji = hexIncrement(emoji);
//         collection.appendChild(emojiElem);
//     }
//     return collection;
// }

// function hexIncrement(hex) {
//     return (parseInt(hex, 16) + 1).toString(16);
// }



// emojiPicker.querySelectorAll(".tab").forEach(tab => {
//     tab.onclick = (e) => {
//         if(emojiPicker.querySelector(".tab.active")) {
//             emojiPicker.querySelector(".tab.active").classList.remove("active");
//         }
//         tab.classList.add("active");

//         let tabContentClass = tab.getAttribute("collection-name");
//         let tabContent = emojiPicker.querySelector("." + tabContentClass);
//         let tabBody = document.querySelector(".tab-body");

//         if(tabBody.querySelector(".visible")) {
//             tabBody.querySelector(".visible").classList.toggle("visible");
//         }

//         tabBody.appendChild(tabContent);
//         tabContent.classList.toggle("visible");
//     }
// });

// emojiPicker.querySelectorAll(".emoji").forEach(e => {
//     e.onclick = () => {
//         console.log(e.innerText);
//     }
// });

// window.addEventListener("click", e => {
//     if(!emojiPicker.contains(e.target)) {
//         emojiPicker.classList.remove("visible");
//     }
// });

let template = `
    <div id="emoji-picker" class="emoji-picker">
        <input type="text" class="search" name="emoji-search" id="emoji-search" placeholder="Search">
        <div class="tabs">
            <span class="tab active emoji" collection-name="smiles">&#x1F600</span>
            <span class="tab emoji" collection-name="hearts">&#x1F493</span>
        </div>
        <div class="tab-body">
            <div class="collection smiles visible">
                <span class="emoji">&#x1F600</span>
                <span class="emoji">&#x1F601</span>
                <span class="emoji">&#x1F602</span>
                <span class="emoji">&#x1F603</span>
                <span class="emoji">&#x1F604</span>
                <span class="emoji">&#x1F605</span>
                <span class="emoji">&#x1F606</span>
                <span class="emoji">&#x1F607</span>
                <span class="emoji">&#x1F608</span>
                <span class="emoji">&#x1F609</span>
                <span class="emoji">&#x1F60A</span>
                <span class="emoji">&#x1F60B</span>
                <span class="emoji">&#x1F60C</span>
                <span class="emoji">&#x1F60D</span>
                <span class="emoji">&#x1F60E</span>
                <span class="emoji">&#x1F60F</span>
                <span class="emoji">&#x1F610</span>
                <span class="emoji">&#x1F611</span>
                <span class="emoji">&#x1F612</span>
                <span class="emoji">&#x1F613</span>
                <span class="emoji">&#x1F614</span>
                <span class="emoji">&#x1F615</span>
                <span class="emoji">&#x1F616</span>
                <span class="emoji">&#x1F617</span>
                <span class="emoji">&#x1F618</span>
                <span class="emoji">&#x1F619</span>
                <span class="emoji">&#x1F61A</span>
                <span class="emoji">&#x1F61B</span>
                <span class="emoji">&#x1F61C</span>
                <span class="emoji">&#x1F61D</span>
                <span class="emoji">&#x1F61E</span>
                <span class="emoji">&#x1F61F</span>
                <span class="emoji">&#x1F620</span>
                <span class="emoji">&#x1F621</span>
                <span class="emoji">&#x1F622</span>
                <span class="emoji">&#x1F623</span>
                <span class="emoji">&#x1F624</span>
                <span class="emoji">&#x1F625</span>
                <span class="emoji">&#x1F626</span>
                <span class="emoji">&#x1F627</span>
                <span class="emoji">&#x1F628</span>
                <span class="emoji">&#x1F629</span>
                <span class="emoji">&#x1F62A</span>
                <span class="emoji">&#x1F62B</span>
                <span class="emoji">&#x1F62C</span>
                <span class="emoji">&#x1F62D</span>
                <span class="emoji">&#x1F62E</span>
                <span class="emoji">&#x1F62F</span>
            </div>
            <div class="collection hearts">
                <span class="emoji">&#x1F493</span>
                <span class="emoji">&#x1F494</span>
                <span class="emoji">&#x1F495</span>
                <span class="emoji">&#x1F496</span>
                <span class="emoji">&#x1F497</span>
                <span class="emoji">&#x1F498</span>
                <span class="emoji">&#x1F499</span>
                <span class="emoji">&#x1F49A</span>
                <span class="emoji">&#x1F49B</span>
                <span class="emoji">&#x1F49C</span>
                <span class="emoji">&#x1F49D</span>
                <span class="emoji">&#x1F49E</span>
                <span class="emoji">&#x1F49F</span>
            </div>
        </div>
    </div>
    <style>
        .emoji-picker {
            border: 1px solid #dddddd;
            /* display: none; */

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .emoji-picker.visible {
            display: block;
        }

        .emoji-picker input.search {
            padding: 8px;
            margin: 10px;
            border-radius: 5px;
            outline: none;
            border: 1px solid #dddddd;
            font-size: 18px;
        }

        .emoji-picker .tabs {
            border-bottom: 1px solid #dddddd;
            display: flex;
            align-items: center;
        }

        .emoji {
            width: 40px;
            height: 40px;
            font-size: 22px;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .emoji-picker .tab.active {
            border-bottom: 2px solid #355AC2;
        }

        .emoji-picker .tab-body {
            height: 240px;
            overflow-y: auto;
            scrollbar-width: thin;
        }

        .emoji-picker .collection {
            display: none;
        }

        .emoji-picker .collection.visible {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }
    </style>
    `;