import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

export function verifyGitHubSignature(req, res, buf, encoding) {
  const signature = req.headers['x-hub-signature-256'];
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  if (!signature || !secret) {
    throw new Error('Missing signature or secret');
  }

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(buf, encoding);
  const digest = `sha256=${hmac.digest('hex')}`;

  if (signature !== digest) {
    throw new Error('Invalid signature');
  }
}
