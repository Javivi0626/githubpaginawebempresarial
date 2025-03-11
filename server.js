const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "dda85dd5af3c4a369e443e652706fe44";

// Diccionario de categorías en español relacionadas con Google
const CATEGORIAS = {
    "accesibilidad": "Google Accesibilidad",
    "arts-culture": "Google Arts & Culture",
    "desarrolladores": "Google Developers",
    "bienestar-digital": "Google Digital Wellbeing",
    "diversidad-inclusion": "Google Diversidad e Inclusión",
    "emprendedores": "Google Emprendedores",
    "google-ads": "Google Ads",
    "google-news": "Google News",
    "google-org": "Google.org",
    "educacion": "Google Educación",
    "usuarios": "Google Tecnología",
    "pymes": "Google Pequeñas Empresas",
    "sustentabilidad": "Google Sustentabilidad"
};

app.get("/noticias", async (req, res) => {
    const categoria = req.query.categoria || "Google Noticias";
    const categoriaTraducida = CATEGORIAS[categoria] || "Google Noticias"; // Traducción segura

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${categoriaTraducida}&language=es&sortBy=publishedAt&apiKey=${API_KEY}`);
        console.log(`🔹 Noticias cargadas para categoría: ${categoriaTraducida}`);
        res.json(response.data);
    } catch (error) {
        console.error("❌ Error al obtener noticias:", error.message);
        res.status(500).json({ error: "Error al obtener noticias" });
    }
});

app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000/noticias"));
