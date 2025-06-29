// magnet_engine.js
// 🧲 處理 TikTok 連結的磁力演算法模擬器

const fs = require('fs');
const path = require('path');

function simulateMagnetism(linkData) {
  const simulatedResults = linkData.map((entry, index) => {
    const boostFactor = Math.floor(Math.random() * 1000) + 500;
    const keywords = extractHashtags(entry.title);

    return {
      ...entry,
      boost_score: boostFactor,
      suggested_hashtags: keywords,
      status: "模擬完成 ✅"
    };
  });

  logSimulation(simulatedResults);
  return simulatedResults;
}

function extractHashtags(title) {
  const words = title.split(" ");
  return words
    .filter(word => word.length > 4)
    .slice(0, 3)
    .map(word => `#${word.toLowerCase()}`);
}

function logSimulation(data) {
  const filePath = path.join(__dirname, '../logs/magnet_log.json');
  const log = {
    timestamp: new Date().toISOString(),
    data
  };

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(log, null, 2), 'utf-8');
  console.log("📊 模擬資料已記錄至 logs/magnet_log.json");
}

module.exports = {
  simulateMagnetism
};
