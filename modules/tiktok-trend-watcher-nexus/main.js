const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Ruta para guardar tendencias simuladas
const trendsLogPath = path.join(__dirname, 'detected_trends.json');

// Simulación de tendencias destacadas (mock)
const trendingHashtags = [
  "#viral",
  "#parati",
  "#foryou",
  "#humor",
  "#musictrend",
  "#tendencia2025",
  "#AIgenerated",
  "#digitalart"
];

// Función simulada para "detectar" tendencias
function detectTikTokTrends() {
  const timestamp = new Date().toISOString();

  const trendsData = {
    timestamp,
    topTrends: trendingHashtags.slice(0, 5), // Simula top 5
    source: "simulado-local",
    status: "ok"
  };

  fs.writeFileSync(trendsLogPath, JSON.stringify(trendsData, null, 2));
  console.log(`🧠 Tendencias detectadas: ${trendsData.topTrends.join(', ')}`);
}

// Punto de inicio
(async () => {
  console.log("🚀 Iniciando escaneo de tendencias TikTok (modo simulado)...");
  detectTikTokTrends();
})();
