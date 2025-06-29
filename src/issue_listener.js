// src/issue_listener.js

const { Octokit } = require('@octokit/rest');
const { escribirLog } = require('./log_writer');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;

// Detectar enlaces de TikTok en un issue
function contieneEnlaceTikTok(texto) {
  const regex = /https:\/\/www\.tiktok\.com\/[^\s)]+/g;
  return texto.match(regex) || [];
}

// Leer los issues y registrar los que contengan TikTok
async function revisarIssues() {
  try {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      state: 'open'
    });

    for (const issue of issues) {
      const enlaces = contieneEnlaceTikTok(issue.body || '');
      if (enlaces.length > 0) {
        for (const enlace of enlaces) {
          escribirLog(`📥 Issue #${issue.number} - TikTok: ${enlace}`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Error al revisar issues:', error.message);
  }
}

module.exports = {
  revisarIssues
};
