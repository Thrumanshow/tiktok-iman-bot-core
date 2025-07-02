/**
 * 🛡️ 受監督的貢獻過濾器
 * 作者：Thrumanshow（Cristhiam Quiñonez）
 * 專案：tiktok-iman-bot-core
 * 目的：防止惡意 Fork 或未授權的貢獻。
 */

const fs = require('fs');
const path = require('path');

// 貢獻說明文件的路徑
const contribPath = path.join(__dirname, '../acerca-de/nexus-alerts/filtro-malicioso/CONTRIBUTING.md');

// 貢獻驗證函式
function validarContribucion(usuario) {
  const AUTOR_OFICIAL = 'Thrumanshow';
  const usuariosPermitidos = ['Thrumanshow', 'github-actions[bot]', 'colaborador-de-confianza'];

  if (!usuariosPermitidos.includes(usuario)) {
    console.warn(`🚨 已封鎖貢獻：${usuario} 未經授權。`);

    return {
      autorizado: false,
      mensaje: '你的貢獻將由作者審核後才會合併。'
    };
  }

  return {
    autorizado: true,
    mensaje: '貢獻有效，正在繼續處理...'
  };
}

// 匯出過濾器模組
module.exports = {
  validarContribucion
};