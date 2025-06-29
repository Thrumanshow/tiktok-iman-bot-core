// src/core/issue_listener.js

/**
 * Escucha issues abiertas en GitHub con enlaces de TikTok,
 * registra los datos y marca el issue como procesado.
 */

const { Octokit } = require('@octokit/rest');
const { appendToLog } = require('../utils/log_writer');
require('dotenv').config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const OWNER = process.env.REPO_OWNER;
const REPO = process.env.REPO_NAME;

async function scanIssues() {
  try {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: OWNER,
      repo: REPO,
      state: 'open',
    });

    for (const issue of issues) {
      if (issue.title.includes('https://www.tiktok.com/')) {
        const entry = {
          id: issue.id,
          number: issue.number,
          title: issue.title,
          user: issue.user.login,
          created_at: issue.created_at,
        };

        await appendToLog(entry);

        await octokit.issues.createComment({
          owner: OWNER,
          repo: REPO,
          issue_number: issue.number,
          body: '🧲 Tu TikTok fue detectado y registrado. ¡Gracias por usar el imán!',
        });

        await octokit.issues.update({
          owner: OWNER,
          repo: REPO,
          issue_number: issue.number,
          state: 'closed',
        });

        console.log(`✅ Issue #${issue.number} procesado.`);
      }
    }
  } catch (error) {
    console.error('❌ Error procesando issues:', error);
  }
}

module.exports = {
  scanIssues,
};
