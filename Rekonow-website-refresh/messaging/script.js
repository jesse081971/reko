(function () {
    // Active nav link
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("a[data-nav]").forEach(a => {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href === path) a.classList.add("active");
        if (path === "" && href === "index.html") a.classList.add("active");
    });

    // Mobile menu toggle
    const btn = document.querySelector("[data-mobile-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (btn && menu) {
        btn.addEventListener("click", () => menu.classList.toggle("open"));
    }
})();