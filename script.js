const navButton = document.querySelector(".nav__button");
const navItems = document.querySelector(".nav__items");

navButton.addEventListener("click", () => {
    navItems.classList.toggle("open");
});