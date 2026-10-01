const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const abierto = nav.classList.contains("active");

        menuBtn.textContent = abierto ? "×" : "☰";
        menuBtn.setAttribute("aria-expanded", abierto);

    });

    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");

        });

    });
}