# 🧲 TikTok 吸鐵核心系統 `tiktok-iman-bot-core`

🎯 一個用於提高 TikTok 貼文能見度與互動率的自動化模組，融合策略性發佈、資料記錄與增強社群參與的行動核心。

---

## 🌟 專案宗旨

「讓每一個 TikTok 連結都具備磁力。」  
本系統由 [HormigasAIS](https://github.com/Thrumanshow) 開發，透過自動化流程將 TikTok 貼文導入 Issues 追蹤並引導觀察其表現成長，達到：

- 🚀 提高曝光率
- 📈 增加留言與分享
- 👥 促進粉絲自然增長
- 🔁 建立資料日誌以評估成效

---

## 🛠 功能模組概覽

| 模組 | 功能 | 路徑 |
|------|------|------|
| 📌 `issue_listener.js` | 偵測新的 Issue 並擷取 TikTok 連結 | `src/handlers/` |
| 📊 `log_writer.js` | 將互動數據寫入 `magnet_log.json` | `src/utils/` |
| 🧠 `analyzer.js` | 對影片表現進行初步分析與排序 | `src/core/` |
| 🗂 `magnet_log.json` | 儲存所有貼文紀錄 | `logs/` |

---

## 🧪 使用方式

1. 建立一個新的 Issue，內容含有 TikTok 貼文連結。
2. Bot 自動擷取該連結並建立追蹤。
3. 每日分析互動變化並記錄至日誌。
4. 可整合 Slack、Notion、Zapier 等服務進行提示與擴展。

---

## 📌 目標用戶

- 內容創作者 🎥  
- 社群經營者 📱  
- 成長駭客 💻  
- 行銷與品牌團隊 🧩

---

## 🧬 模型靈感

此系統受到 HormigasAIS 創辦人 Cristhiam Quiñonez 實驗的啟發，於 Instagram 上以無預警策略達到超過 200 萬次觀看與數千次互動。

---

## 🌀 聯絡與參與

歡迎你加入我們，一起打造數位吸鐵能量：

- 🌐 GitHub: [HormigasAIS](https://github.com/Thrumanshow)
- 🧠 構想擴展請至 `issues/`
- 🧲 Powered by `XOXO Autonomo` + `NEXUS.json`

> 「吸引不是偶然，而是你給世界的一個信號。」
