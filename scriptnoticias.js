document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mode-toggle");
    const body = document.body;
    const iconSol = document.getElementById("icon-sol");
    const iconLuna = document.getElementById("icon-luna");
    const logo = document.getElementById("logo");
    const favicon = document.getElementById("favicon");
    const API_URL = "http://localhost:3000/noticias";
    const btnIzquierda = document.getElementById("btn-izquierda");
    const btnDerecha = document.getElementById("btn-derecha");
    const menuCategorias = document.querySelector(".categorias");

    // 🏹 Función para mover a la derecha
    btnDerecha.addEventListener("click", function () {
        menuCategorias.scrollLeft += 220; // Ajuste para evitar margen
    });

    // 🏹 Función para mover a la izquierda
    btnIzquierda.addEventListener("click", function () {
        menuCategorias.scrollLeft -= 220; // Ajuste para evitar margen
    });

    console.log("✔️ Carrusel de categorías activado.");

    // 🌙 Modo oscuro
    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            body.classList.add("dark-mode");
            iconSol.classList.add("hidden");
            iconLuna.classList.remove("hidden");
            logo.src = "img/logoclaro2.png";
            favicon.href = "img/logocico2.ico";
        } else {
            body.classList.remove("dark-mode");
            iconSol.classList.remove("hidden");
            iconLuna.classList.add("hidden");
            logo.src = "img/logoclaro2.png";
            favicon.href = "img/logocico2.ico";
        }
    });

    // 📡 Función para cargar noticias de una categoría específica
    async function cargarNoticias(categoria = "google-news") {
        try {
            const response = await fetch(`${API_URL}?categoria=${categoria}`);
            const data = await response.json();
            console.log(`🔹 Noticias de: ${categoria}`, data);

            if (data.articles.length > 0) {
                const noticia = data.articles[0]; // Noticia destacada
                document.getElementById("noticia-imagen").src = noticia.urlToImage || "img/default.jpg";
                document.getElementById("noticia-titulo").textContent = noticia.title || "Sin título";
                document.getElementById("noticia-descripcion").textContent = noticia.description || "Sin descripción";
                document.getElementById("leer-articulo").href = noticia.url || "#";
            }

            // 🔄 Actualizar las 6 tarjetas
            const noticiasContainer = document.getElementById("noticias-container");
            noticiasContainer.innerHTML = "";

            data.articles.slice(1, 7).forEach(noticia => {
                const card = document.createElement("div");
                card.classList.add("noticia-card");
                card.innerHTML = `
                    <img src="${noticia.urlToImage || 'img/default.jpg'}" alt="Imagen Noticia" class="miniatura">
                    <div class="noticia-texto">
                        <h3>${noticia.title}</h3>
                        <p>${noticia.description || "Sin descripción"}</p>
                    </div>
                `;
                noticiasContainer.appendChild(card);
            });

        } catch (error) {
            console.error("❌ Error al cargar noticias:", error);
        }
    }

    // 🟢 Evento para cambiar noticias según la categoría seleccionada
    menuCategorias.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const categoriaSeleccionada = event.target.dataset.categoria;
            console.log(`📢 Cargando noticias para: ${categoriaSeleccionada}`);

            // 🔹 Resalta la categoría seleccionada
            document.querySelectorAll("#menu li").forEach(item => item.classList.remove("selected"));
            event.target.classList.add("selected");

            // 🔹 Cargar noticias de la categoría seleccionada
            cargarNoticias(categoriaSeleccionada);
        }
    });

    // 🔄 Cargar noticias por defecto
    cargarNoticias();
});
