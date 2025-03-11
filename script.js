document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mode-toggle");
    const body = document.body;
    const iconSol = document.getElementById("icon-sol");
    const iconLuna = document.getElementById("icon-luna");
    const logo = document.getElementById("logo");
    const favicon = document.getElementById("favicon"); // Obtenemos el favicon

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
});
