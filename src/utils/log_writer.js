// src/utils/log_writer.js

/**
 * Módulo para registrar eventos detectados (como nuevos enlaces de TikTok)
 * en un archivo magnet_log.json de forma segura y ordenada.
 */

const fs = require('fs');
const path = require('path');

const LOG_PATH = path.join(__dirname, '../../data/magnet_log.json');

// Asegura que el archivo exista
function ensureLogFile() {
  if (!fs.existsSync(LOG_PATH)) {
    fs.writeFileSync(LOG_PATH, JSON.stringify([], null, 2));
  }
}

// Agrega un nuevo registro
async function appendToLog(entry) {
  try {
    ensureLogFile();

    const existing = JSON.parse(fs.readFileSync(LOG_PATH));
    existing.push(entry);

    fs.writeFileSync(LOG_PATH, JSON.stringify(existing, null, 2));
    console.log('🧲 Registro actualizado con éxito.');
  } catch (error) {
    console.error('❌ Error al escribir en el log:', error);
  }
}

module.exports = {
  appendToLog
};
