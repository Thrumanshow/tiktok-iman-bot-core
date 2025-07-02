// src/discord-notify.js
const axios = require('axios');
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

async function notifyDiscord({ repo, author, message, url }) {
  if (!DISCORD_WEBHOOK_URL) {
    console.error('❌ No se ha configurado el webhook de Discord.');
    return;
  }

  const embed = {
    title: `📢 Nuevo Push en ${repo}`,
    description: message,
    color: 0x1D82B6,
    url: url,
    fields: [
      {
        name: '👤 Autor',
        value: author,
        inline: true
      },
      {
        name: '🔗 Commit',
        value: `[Ver commit](${url})`,
        inline: true
      }
    ],
    timestamp: new Date()
  };

  try {
    await axios.post(DISCORD_WEBHOOK_URL, {
      username: 'Imán Bot Core',
      avatar_url: 'https://i.imgur.com/sC7QK7x.png',
      embeds: [embed]
    });
    console.log('✅ Notificación enviada a Discord.');
  } catch (error) {
    console.error('❌ Error al enviar mensaje a Discord:', error.message);
  }
}

module.exports = notifyDiscord;