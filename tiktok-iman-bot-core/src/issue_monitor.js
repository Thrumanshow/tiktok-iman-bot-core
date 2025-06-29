// issue_monitor.js
// 🔎 監控 GitHub Issues 以偵測 TikTok 連結

const { Octokit } = require("@octokit/rest");
require("dotenv").config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function fetchTikTokIssues() {
  try {
    const issues = await octokit.issues.listForRepo({
      owner: process.env.REPO_OWNER,
      repo: process.env.REPO_NAME,
      state: "open"
    });

    const tiktokLinks = [];

    for (const issue of issues.data) {
      const urls = issue.body.match(/https:\/\/www\.tiktok\.com\/[^\s)]+/g);
      if (urls) {
        urls.forEach(url => {
          tiktokLinks.push({
            issue_number: issue.number,
            url,
            title: issue.title
          });
        });
      }
    }

    return tiktokLinks;

  } catch (error) {
    console.error("❌ 無法取得 Issue 資料:", error.message);
    return [];
  }
}

module.exports = {
  fetchTikTokIssues
};
