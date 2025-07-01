// src/discord-notify.js
const axios = require('axios');
require('dotenv').config();

async function notifyDiscord(message) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("⚠️ Webhook de Discord no configurado.");
    return;
  }

  try {
    await axios.post(webhookUrl, {
      content: message
    });
    console.log("✅ Notificación enviada a Discord");
  } catch (error) {
    console.error("❌ Error al enviar a Discord:", error.message);
  }
}

module.exports = notifyDiscord;
