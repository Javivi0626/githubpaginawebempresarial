document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mode-toggle");
    const body = document.body;
    const iconSol = document.getElementById("icon-sol");
    const iconLuna = document.getElementById("icon-luna");
    const logo = document.getElementById("logo");
    const favicon = document.getElementById("favicon"); // Obtenemos el favicon
    const cartas = document.querySelectorAll(".carta-app");
    const planes = document.querySelectorAll(".plan");
    const iconos = document.querySelectorAll(".icono");

 // Animación de entrada para las tarjetas
 setTimeout(() => {
    cartas.forEach((carta, index) => {
        setTimeout(() => {
            carta.style.animation = "subir 0.5s ease forwards";
        }, index * 150);
    });
}, 300);

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            // Activar modo oscuro
            body.classList.add("dark-mode");
            iconSol.classList.add("hidden");
            iconLuna.classList.remove("hidden");
            logo.src = "img/logoclaro2.png"; // Cambia el logo principal
            favicon.href = "img/logocico2.ico"; // Cambia el favicon a oscuro
        } else {
            // Volver a modo claro
            body.classList.remove("dark-mode");
            iconSol.classList.remove("hidden");
            iconLuna.classList.add("hidden");
            logo.src = "img/logoclaro2.png"; // Cambia el logo principal
            favicon.href = "img/logocico2.ico"; // Cambia el favicon a claro
        }
    });
    function mostrarIconos() {
        let scrollY = window.scrollY + window.innerHeight;

        iconos.forEach(icono => {
            let iconoTop = icono.offsetTop;
            if (scrollY > iconoTop + 50) {
                icono.classList.add("show");
            }
        });
    }

    function animarPlanes() {
        planes.forEach(plan => {
            let rect = plan.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                plan.classList.add("mostrar"); // Agrega la clase cuando el plan entra en la pantalla
            }
        });
    }
    window.addEventListener("scroll", animarPlanes);
    animarPlanes(); // Ejecuta al cargar

    window.addEventListener("scroll", mostrarIconos);
    mostrarIconos();
});
