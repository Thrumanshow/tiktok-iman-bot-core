// github_issuer.js
const axios = require("axios");

async function createIssue(trend, token, repoOwner, repoName) {
  const response = await axios.post(
    `https://api.github.com/repos/${repoOwner}/${repoName}/issues`,
    {
      title: `🔥 Tendencia detectada: ${trend.tag}`,
      body: `🚀 Esta tendencia ha superado las ${trend.views} vistas en TikTok.\n\nActuemos ahora.`,
      labels: ["tendencia", "auto-generado"],
    },
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  return response.data;
}

module.exports = { createIssue };
