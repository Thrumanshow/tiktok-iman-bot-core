// src/log_writer.js

const fs = require('fs');
const path = require('path');

// Ruta al archivo de log
const LOG_PATH = path.join(__dirname, '../logs/eventos_tiktok.log');

// Función para registrar eventos
function escribirLog(evento) {
  const fecha = new Date().toISOString();
  const linea = `[${fecha}] ${evento}\n`;

  fs.appendFile(LOG_PATH, linea, (err) => {
    if (err) {
      console.error('❌ Error al escribir en el log:', err.message);
    } else {
      console.log('📌 Evento registrado en log.');
    }
  });
}

module.exports = {
  escribirLog
};
