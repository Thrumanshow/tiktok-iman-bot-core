// listeners/issue_listener.js
/**
 * Escucha e interpreta los issues como si fueran publicaciones programadas.
 * Cada issue debe contener un enlace a una publicación de TikTok.
 */

const fs = require('fs');
const path = require('path');
const logWriter = require('../utils/log_writer');

function analizarIssue(archivoIssue) {
  const ruta = path.join('./issues', archivoIssue);
  const contenido = fs.readFileSync(ruta, 'utf8');

  const match = contenido.match(/https:\/\/www\.tiktok\.com\/@[^\s]+/);
  if (match) {
    const enlace = match[0];
    logWriter.logEvento(`🎯 Enlace detectado: ${enlace}`);
    // Lógica futura: rastrear interacciones de ese enlace
  } else {
    logWriter.logEvento(`⚠️ No se encontró un enlace válido en: ${archivoIssue}`);
  }
}

function escucharIssues() {
  const carpetaIssues = './issues';
  if (!fs.existsSync(carpetaIssues)) {
    fs.mkdirSync(carpetaIssues);
    logWriter.logEvento("📁 Carpeta de issues creada.");
  }

  fs.watch(carpetaIssues, (eventType, filename) => {
    if (eventType === 'rename' && filename.endsWith('.md')) {
      logWriter.logEvento(`🆕 Nuevo issue detectado: ${filename}`);
      analizarIssue(filename);
    }
  });

  logWriter.logEvento("👂 Escuchando la carpeta de issues...");
}

module.exports = {
  escucharIssues
};
