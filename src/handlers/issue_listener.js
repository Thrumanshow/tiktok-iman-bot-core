// src/handlers/issue_listener.js

/**
 * Detecta nuevos issues con enlaces de TikTok y los prepara para ser procesados.
 * Ideal para flujos GitHub Actions o uso embebido en bot.
 */

const fs = require('fs');
const path = require('path');
const logWriter = require('../utils/log_writer');

function extractTikTokLink(body) {
  const regex = /https?:\/\/(www\.)?tiktok\.com\/[^\s)]+/gi;
  const matches = body.match(regex);
  return matches ? matches[0] : null;
}

async function handleNewIssue(issue) {
  const link = extractTikTokLink(issue.body);

  if (!link) {
    console.log('❌ No se encontró enlace de TikTok válido en el issue.');
    return;
  }

  const logData = {
    timestamp: new Date().toISOString(),
    title: issue.title,
    tiktok_link: link,
    issue_url: issue.html_url,
    user: issue.user.login
  };

  await logWriter.appendToLog(logData);
  console.log(`✅ Enlace registrado desde issue: ${link}`);
}

module.exports = {
  handleNewIssue
};

