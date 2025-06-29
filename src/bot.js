// src/bot.js

require('dotenv').config();
const { Octokit } = require('@octokit/rest');
const { listenIssues } = require('./issue_listener');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function main() {
  console.log('🧲 Iniciando TikTok Imán Bot...');

  try {
    // Aquí se lanza la escucha continua o inicialización según la lógica en issue_listener.js
    await listenIssues(octokit);
  } catch (error) {
    console.error('Error en bot principal:', error);
  }
}

main();
