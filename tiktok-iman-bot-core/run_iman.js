// run_iman.js
// 主控制器：監控 Issues 並啟動磁力模擬器

require('dotenv').config();
const { fetchTikTokIssues } = require('./src/issue_monitor');
const { simulateMagnetism } = require('./src/magnet_engine');

async function main() {
  console.log("🔁 啟動 TikTok 磁力模擬器...");

  try {
    const issues = await fetchTikTokIssues();
    if (issues.length === 0) {
      console.log("⚠️ 尚未偵測到任何 TikTok 連結。請於 Issue 中貼上您的影片連結。");
      return;
    }

    const enrichedData = simulateMagnetism(issues);

    console.log("✅ 模擬完成！以下是結果預覽：");
    enrichedData.forEach((item, i) => {
      console.log(`${i + 1}. ${item.title}`);
      console.log(`   ➤ Boost Score: ${item.boost_score}`);
      console.log(`   ➤ 建議 Hashtags: ${item.suggested_hashtags.join(" ")}`);
    });

  } catch (err) {
    console.error("❌ 執行錯誤:", err.message);
  }
}

main();
