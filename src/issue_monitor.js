// src/issue_monitor.js

/**
 * 📡 問題監控器
 * 此模組會偵測 GitHub issues 並提取 TikTok 連結及其元資料，以觸發內容優化。
 */

const axios = require('axios');

async function 擷取Issues(倉庫擁有者, 倉庫名稱, githubToken) {
  const url = `https://api.github.com/repos/${倉庫擁有者}/${倉庫名稱}/issues`;
  const headers = {
    'Authorization': `token ${githubToken}`,
    'Accept': 'application/vnd.github.v3+json'
  };

  try {
    const 回應 = await axios.get(url, { headers });
    const 有效資料 = 回應.data.filter(issue => issue.body.includes('tiktok.com'));

    return 有效資料.map(issue => ({
      標題: issue.title,
      TikTok連結: 擷取TikTok連結(issue.body),
      issue編號: issue.number
    }));
  } catch (錯誤) {
    console.error("擷取 Issue 發生錯誤：", 錯誤.message);
    return [];
  }
}

function 擷取TikTok連結(文字內容) {
  const 匹配 = 文字內容.match(/https?:\/\/www\.tiktok\.com\/[^\s)]+/);
  return 匹配 ? 匹配[0] : null;
}

module.exports = {
  擷取Issues
};
