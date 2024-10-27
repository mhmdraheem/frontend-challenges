const headerNavBtn = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".nav");

headerNavBtn.addEventListener("click", () => {
  headerNav.classList.toggle("nav--visible");
});