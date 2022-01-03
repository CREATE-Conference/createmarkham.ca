//Renable transitions on page load
window.addEventListener(
    'load',
    function load() {
        window.removeEventListener('load', load, false);
        document.body.classList.remove('preload');
    },
    false);

//Mobile nav
const navButton = document.getElementById("navButton");
const navText = document.getElementById("navText");
const nav = document.getElementById("nav");
const body = document.body;

let menuOpen = false;

const openMenu = () => {
    menuOpen = true;
    nav.classList.add("open-nav");
    body.classList.add("no-scrolling");
    navText.innerHTML = "close";
}

const closeMenu = () => {
    menuOpen = false;
    nav.classList.remove("open-nav");
    body.classList.remove("no-scrolling");
    navText.innerHTML = "menu";
}

navButton.onclick = function () {
    if (menuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

document.body.addEventListener("click", function (e) {
    if (menuOpen && (!e.target.classList.contains("nav__button")) && !e.target.classList.contains("nav__button-text")) {
        closeMenu();
    }
});

window.addEventListener("resize", function () {
    if (menuOpen) {
        closeMenu();
    }
});