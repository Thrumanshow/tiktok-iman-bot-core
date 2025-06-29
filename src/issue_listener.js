// src/issue_listener.js

const { IncomingWebhook } = require('@slack/webhook');
require('dotenv').config();

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// Crear instancia del webhook de Slack
const slack = new IncomingWebhook(SLACK_WEBHOOK_URL);

// Verifica si el issue contiene un enlace de TikTok válido
function extractTikTokLink(text) {
  const regex = /(https?:\/\/(?:www\.)?tiktok\.com\/[^\s]+)/g;
  const match = text.match(regex);
  return match ? match[0] : null;
}

// Procesa el payload de un issue
async function handleIssue(payload) {
  const { action, issue } = payload;

  if (action === 'opened') {
    const tiktokLink = extractTikTokLink(issue.body);

    if (tiktokLink) {
      const message = `🧲 Nueva publicación TikTok detectada:\n\n👤 Usuario: ${issue.user.login}\n🔗 Enlace: ${tiktokLink}\n📝 Título: ${issue.title}`;
      console.log(message);

      if (SLACK_WEBHOOK_URL) {
        await slack.send({ text: message });
      }
    } else {
      console.log('No se detectó ningún enlace de TikTok válido en el issue.');
    }
  }
}

module.exports = {
  handleIssue
};
