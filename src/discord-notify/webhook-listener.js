// webhook-listener.js
const express = require('express');
const bodyParser = require('body-parser');
const verifyGitHubSignature = require('./src/webhook-verifier');
const notifyDiscord = require('./src/discord-notify');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para verificar firma
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));

app.post('/webhook', (req, res) => {
  const signatureIsValid = verifyGitHubSignature(req);

  if (!signatureIsValid) {
    console.warn('❌ Firma no válida. Posible intento de intrusión.');
    return res.status(401).send('Firma no válida.');
  }

  const payload = req.body;
  const commitMsg = payload.head_commit?.message || '(sin mensaje)';
  const repoName = payload.repository.full_name;
  const pusher = payload.pusher.name;

  console.log('✅ Webhook recibido desde:', repoName);
  console.log('📦 Último commit:', commitMsg);

  // Notificar a Discord
  notifyDiscord({
    repo: repoName,
    author: pusher,
    message: commitMsg,
    url: payload.head_commit?.url || ''
  });

  res.status(200).send('Webhook procesado.');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor webhook escuchando en el puerto ${PORT}`);
});