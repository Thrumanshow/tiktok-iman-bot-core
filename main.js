// main.js
/**
 * Punto de entrada principal para el bot imán de TikTok 🧲.
 * Escucha la carpeta de issues y registra eventos.
 */

const { escucharIssues } = require('./listeners/issue_listener');
const logWriter = require('./utils/log_writer');

// 🔄 Iniciar escucha de issues
logWriter.logEvento("🚀 Iniciando TikTok Imán Bot...");
escucharIssues();
