// main.js

/**
 * Punto de entrada del sistema TikTok-Imán-Bot-Core.
 * Ejecuta la detección de enlaces TikTok en issues y activa el magnetismo digital.
 */

const { scanIssues } = require('./src/core/issue_listener');

console.log('🧲 Iniciando sistema de atracción...');

(async () => {
  await scanIssues();
  console.log('📡 Escaneo completo. Vuelve cuando quieras lanzar otro imán.');
})();
REPO_OWNER=你的GitHub帳號 REPO_NAME=你的儲存庫名稱 GITHUB_TOKEN=你的個人訪問令牌 node main.js
