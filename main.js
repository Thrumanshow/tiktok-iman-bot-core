// main.js
/**
 * Punto de entrada principal del bot TikTok-Imán
 * Por ahora, inicia con un mensaje de prueba.
 */

const fs = require('fs');

console.log("🧲 TikTok-Imán Bot encendido. Preparando lectura de issues...");

// Simulación de arranque del bot (puede conectarse luego a GitHub API)
fs.readdir('./issues', (err, files) => {
  if (err) {
    console.error("❌ No se pudo leer la carpeta de issues.");
    return;
  }

  console.log(`✅ Issues detectadas: ${files.length}`);
  files.forEach(file => {
    console.log(`🗂️ Procesando: ${file}`);
    // Aquí se integrará la lógica de listener por cada publicación
  });
});
