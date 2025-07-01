// main.js

import { fetchTikTokTrends } from './trends/trend_fetcher.js';
import { generateSuggestionsForUser } from './trends/suggestions_generator.js';

(async () => {
  const trends = await fetchTikTokTrends();
  generateSuggestionsForUser('@chriswarriortv_');
})();

// 🧠 Importación de módulos principales
import { listenToIssues } from './listeners/issue_listener.js';
import { impulsoXOXO } from './src/xoxo-impulsor.js';
import notifyDiscord from './src/discord-notify.js';

// 🧲 Función principal del flujo de ejecución
async function main() {
  try {
    console.log("🔍 Iniciando escucha de Issues...");
    await listenToIssues();
  } catch (error) {
    console.error("❌ Error al escuchar issues:", error.message);
  }

  try {
    console.log("⚙️ Ejecutando módulo de impulso XOXO...");
    await impulsoXOXO(); // módulo inteligente de impulso
  } catch (error) {
    console.error("❌ Error al ejecutar impulso XOXO:", error.message);
  }

  try {
    console.log("📡 Enviando notificación a Discord...");
    await notifyDiscord(
      `🎯 Se ha activado un nuevo impulso para @chriswarriortv_
📎 Video: https://vm.tiktok.com/@chriswarriortv_/video/ZMSCAyQFD
🔥 Estado: En proceso por Imán Bot Core`
    );
  } catch (error) {
    console.error("❌ Error al notificar a Discord:", error.message);
  }
}

// 🚀 Ejecutar flujo
main();
