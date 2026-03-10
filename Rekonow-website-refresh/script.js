// Mobile Menu Toggle Script
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-mobile-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }
});