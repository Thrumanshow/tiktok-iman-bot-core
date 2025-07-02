// src/webhook-verifier.js
const crypto = require('crypto');

const GITHUB_SECRET = process.env.GITHUB_SECRET;

function verifyGitHubSignature(req) {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature || !GITHUB_SECRET) return false;

  const hmac = crypto.createHmac('sha256', GITHUB_SECRET);
  const digest = `sha256=${hmac.update(req.rawBody).digest('hex')}`;

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

module.exports = verifyGitHubSignature;