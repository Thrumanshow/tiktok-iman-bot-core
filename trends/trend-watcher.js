// trends/trend-watcher.js

const axios = require('axios');

async function analyzeTikTokTrend(videoUrl) {
  console.log("🔍 Analizando tendencia de:", videoUrl);

  try {
    // Esta es una simulación. Aquí podrías conectar un scraping real o una API de TikTok si fuera permitido.
    const simulatedScore = Math.floor(Math.random() * 100); // entre 0 y 100
    const isTrending = simulatedScore > 70;

    return {
      videoUrl,
      score: simulatedScore,
      trending: isTrending,
      timestamp: new Date().toISOString(),
      notes: isTrending ? "⚡Contenido con alto potencial de viralidad" : "⏳ Tendencia baja por ahora"
    };
  } catch (error) {
    console.error("❌ Error en el análisis:", error.message);
    return {
      videoUrl,
      error: error.message,
      trending: false
    };
  }
}

module.exports = {
  analyzeTikTokTrend
};