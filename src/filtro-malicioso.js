/**
 * 🛡️ Filtro de Contribución Supervisada
 * Autor: Thrumanshow (Cristhiam Quiñonez)
 * Proyecto: tiktok-iman-bot-core
 * Propósito: Evitar fork malicioso o contribuciones no autorizadas.
 */

const fs = require('fs');
const path = require('path');

// Ruta al archivo de contribución
const contribPath = path.join(__dirname, '../acerca-de/nexus-alerts/filtro-malicioso/contribución.md');

// Función de validación de contribución
function validarContribucion(usuario) {
  const AUTOR_OFICIAL = 'Thrumanshow';
  const usuariosPermitidos = ['Thrumanshow', 'github-actions[bot]', 'colaborador-de-confianza'];

  if (!usuariosPermitidos.includes(usuario)) {
    console.warn(`🚨 Contribución bloqueada: ${usuario} no está autorizado.`);

    return {
      autorizado: false,
      mensaje: 'Tu contribución será revisada por el autor antes de fusionarse.'
    };
  }

  return {
    autorizado: true,
    mensaje: 'Contribución válida. Continuando con el proceso...'
  };
}

// Exportar filtro
module.exports = {
  validarContribucion
};