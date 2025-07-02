// src/coordinator.js

/**
 * 🧲 主協調器
 * 結合 issue 監控與磁性引擎，自動分析與回應 TikTok 內容。
 */

const { 擷取Issues } = require('./issue_monitor');
const { 啟動磁性分析 } = require('./magnet_engine');
require('dotenv').config();

async function 啟動協調() {
  const 倉庫擁有者 = process.env.REPO_OWNER;
  const 倉庫名稱 = process.env.REPO_NAME;
  const githubToken = process.env.GITHUB_TOKEN;

  console.log("🚦 開始監控 TikTok Issues...");

  const issues = await 擷取Issues(倉庫擁有者, 倉庫名稱, githubToken);

  for (const issue of issues) {
    if (issue.TikTok連結) {
      console.log(`🎯 發現 TikTok 連結於 Issue #${issue.issue編號}`);
      await 啟動磁性分析(issue.TikTok連結, issue.issue編號);
    }
  }

  console.log("✅ 本次巡檢結束。");
}

// 可設定定時執行或手動觸發
啟動協調();
