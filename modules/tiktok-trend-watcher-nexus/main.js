// main.js del módulo tiktok-trend-watcher-nexus
const { fetchTrends } = require('./core/trend_fetcher');
const fs = require('fs');
const path = require('path');

async function iniciarEscaneo() {
  console.log("🔍 Iniciando escaneo de tendencias TikTok...");

  const tendencias = await fetchTrends();

  if (tendencias.length === 0) {
    console.warn("⚠️ No se encontraron tendencias.");
    return;
  }

  console.log("✅ Tendencias detectadas:");
  tendencias.forEach((tag, i) => {
    console.log(`  ${i + 1}. ${tag}`);
  });

  // Guardar resultados en logs
  const logDir = path.join(__dirname, 'logs');
  const logFile = path.join(logDir, `trends_${Date.now()}.json`);

  try {
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    fs.writeFileSync(logFile, JSON.stringify({ tendencias, timestamp: new Date() }, null, 2));
    console.log(`📂 Tendencias guardadas en: ${logFile}`);
  } catch (err) {
    console.error("💥 Error al guardar log de tendencias:", err.message);
  }
}

// Ejecución automática si se llama directamente
if (require.main === module) {
  iniciarEscaneo();
}

module.exports = { iniciarEscaneo };
