(function () {
    // Active nav link
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("a[data-nav]").forEach(a => {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href === path) a.classList.add("active");
        if (path === "" && href === "index.html") a.classList.add("active");
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const btns = document.querySelectorAll(".hamburger, [data-mobile-toggle]");
    const menus = document.querySelectorAll(".mobile-nav, [data-mobile-menu]");

    if (btns.length > 0 && menus.length > 0) {
        btns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                menus.forEach(menu => {
                    menu.classList.toggle("open");
                });
                console.log("Menu button clicked. Toggled open class.");
            });
        });
    } else {
        console.error("Mobile menu script ran but could not find the styling elements on this page.");
    }
});