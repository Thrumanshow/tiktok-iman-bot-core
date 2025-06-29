// validate.js

const { WebClient } = require('@slack/web-api');
const { Octokit } = require('@octokit/rest');

const slackToken = process.env.SLACK_BOT_TOKEN;
const githubToken = process.env.GITHUB_TOKEN;
const repoOwner = process.env.REPO_OWNER;
const repoName = process.env.REPO_NAME;

(async () => {
  console.log("🔍 Iniciando validación...");

  // Validar conexión con Slack
  try {
    const slack = new WebClient(slackToken);
    const authTest = await slack.auth.test();
    console.log(`✅ Conectado a Slack como: ${authTest.user}`);
  } catch (err) {
    console.error("❌ Error al conectar con Slack:", err.message);
  }

  // Validar conexión con GitHub
  try {
    const octokit = new Octokit({ auth: githubToken });
    const repo = await octokit.repos.get({ owner: repoOwner, repo: repoName });
    console.log(`✅ Conectado a GitHub: ${repo.data.full_name}`);
  } catch (err) {
    console.error("❌ Error al conectar con GitHub:", err.message);
  }

  console.log("🧠 Validación completada.");
})();
