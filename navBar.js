const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        navLinks.style.display = "block";
        menuOpen = true;
    } else if (menuOpen) {
        navLinks.style.removeProperty("display");
        menuOpen = false;
    }
});