// src/bot.js

const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
require('dotenv').config();

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

// Importamos el listener de issues para conectar con GitHub
const { handleIssueEvent } = require('./issue_listener');

// Inicializamos express para usar middleware de Slack Events
const express = require('express');
const app = express();
app.use(express.json());

// Montar el middleware de slack events
app.use('/slack/events', slackEvents.expressMiddleware());

// Escuchar eventos de issues desde GitHub webhook endpoint
app.post('/github/issues', handleIssueEvent);

// Manejar eventos de mención en Slack
slackEvents.on('app_mention', async (event) => {
  console.log(`Mención recibida: ${event.text}`);

  // Aquí podrías llamar a funciones para manejar respuestas
  // Ejemplo: await handleXoxoEvent(event);
});

// Manejo de errores del adaptador Slack Events
slackEvents.on('error', console.error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot activo en puerto ${PORT}`);
});
