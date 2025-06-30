// main.js
require("dotenv").config();
const { fetchTrends } = require("./trend_fetcher");
const { analyzeTrends } = require("./trend_analyzer");
const { createIssue } = require("./github_issuer");

async function runWatcher() {
  const trends = await fetchTrends();
  const hotTrends = analyzeTrends(trends);

  for (const trend of hotTrends) {
    await createIssue(
      trend,
      process.env.GITHUB_TOKEN,
      process.env.TARGET_REPO_OWNER,
      process.env.TARGET_REPO_NAME
    );
  }
}

runWatcher();
