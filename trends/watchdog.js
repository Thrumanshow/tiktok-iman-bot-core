// trends/watchdog.js

const axios = require('axios');
const { analyzeTikTokTrend } = require('./trend-watcher');
require('dotenv').config();

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL || null;

async function watchdogTrigger(issueData) {
  if (!issueData || !issueData.videoUrl) {
    console.error("⛔ Datos del issue inválidos");
    return;
  }

  console.log("🛡️ Watchdog activo: analizando...", issueData.videoUrl);

  const trendResult = await analyzeTikTokTrend(issueData.videoUrl);

  if (!DISCORD_WEBHOOK) {
    console.warn("⚠️ Webhook de Discord no configurado");
    return;
  }

  const embedMessage = {
    embeds: [
      {
        title: "📡 Nuevo análisis de tendencia (Watchdog)",
        description: `🎯 Evaluando **${issueData.videoUrl}**`,
        fields: [
          {
            name: "🔎 Score de tendencia",
            value: `${trendResult.score}/100`,
            inline: true
          },
          {
            name: "🚨 Estado",
            value: trendResult.trending ? "🔥 Alto potencial viral" : "🧘 Calma, sin señales fuertes",
            inline: true
          },
          {
            name: "📅 Timestamp",
            value: trendResult.timestamp
          }
        ],
        footer: {
          text: "Sistema XOXO | HormigasAIS 🌐"
        },
        color: trendResult.trending ? 0xff0000 : 0x3498db
      }
    ]
  };

  try {
    const res = await axios.post(DISCORD_WEBHOOK, embedMessage);
    console.log("✅ Mensaje enviado a Discord:", res.status);
  } catch (error) {
    console.error("❌ Error al enviar a Discord:", error.message);
  }
}

module.exports = {
  watchdogTrigger
};