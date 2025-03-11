document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mode-toggle");
    const body = document.body;
    const iconSol = document.getElementById("icon-sol");
    const iconLuna = document.getElementById("icon-luna");
    const logo = document.getElementById("logo");
    const favicon = document.getElementById("favicon"); // Obtenemos el favicon
    const tituloProductos = document.querySelector(".titulo-productos");
    const cartas = document.querySelectorAll(".carta-app");
    const filas = document.querySelectorAll(".fila");

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
    function mostrarElementos() {
        let scrollY = window.scrollY + window.innerHeight;

        filas.forEach(fila => {
            let filaTop = fila.offsetTop;
            let filaBottom = filaTop + fila.offsetHeight;

            if (scrollY > filaTop + 50 && window.scrollY < filaBottom - 50) {
                fila.classList.add("show");
            } else {
                fila.classList.remove("show"); // Se vuelve a ocultar para que reaparezca al bajar
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos();
});
