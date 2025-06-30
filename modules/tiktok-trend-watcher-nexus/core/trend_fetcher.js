const axios = require('axios');

// Simulador de entorno: 'simulado' | 'externo'
const MODE = process.env.TIKTOK_TRENDS_MODE || 'simulado';

async function fetchTrends() {
  if (MODE === 'simulado') {
    return [
      "#viral",
      "#parati",
      "#musictrend",
      "#AIart",
      "#robotdance",
      "#humorlatino"
    ];
  }

  if (MODE === 'externo') {
    try {
      const response = await axios.get('https://api.simulada-tiktok-trends.com/v1/trending'); // reemplazable
      return response.data.trends || [];
    } catch (err) {
      console.error("⚠️ Error al conectar con fuente externa:", err.message);
      return [];
    }
  }

  console.warn("⚠️ Modo de tendencias no reconocido. Usando modo simulado.");
  return [];
}

module.exports = { fetchTrends };
