# 🧲 TikTok-IMAN-BOT 核心模組

這是一個專注於 **TikTok 吸引力增強** 的自動化專案。  
其目標是透過 **GitHub Issues** 的觸發，整合演算法模組與自動監控，進行社群內容可視度的優化。

---

## 🌀 專案目標

- 🎯 自動辨識 TikTok 連結。
- 🚀 啟動後端磁性分析模組。
- 📈 增強影片或帳戶在 TikTok 上的曝光率與互動。
- 🤖 實驗性：不需直接操作 TikTok，即可創造影響。

---

## 📂 結構簡介

```
tiktok-iman-bot-core/
├── README.zh-tw.md
├── .env
└── src/
    ├── coordinator.js         # 協調所有模組運作
    ├── issue_monitor.js       # 從 GitHub Issues 擷取資料
    └── magnet_engine.js       # 執行演算法推動 TikTok 流量
```

---

## ⚙️ 設定方式

建立 `.env` 文件，並加入以下內容：

```
REPO_OWNER=你的GitHub帳號
REPO_NAME=你的儲存庫名稱
GITHUB_TOKEN=你的個人訪問令牌
```

---

## 📌 如何使用

1. 在本儲存庫中建立一個 GitHub Issue，內容包含 TikTok 影片或帳戶的連結。
2. 啟動 `coordinator.js`，系統會自動處理連結並呼叫對應模組。
3. 分析後將有回饋（可自訂為 Slack 通知、console.log 或 API 結果）。

---

## 🧪 注意事項

- 本專案為實驗性質，非官方 TikTok 工具。
- 避免違反平台服務條款，請用於學術與創意自動化測試。

---

## 🐜 精神口號

> **「吸引，是一種能量；自動，是未來的節奏。」**

由 🧠 HormigasAIS x Thrumanshow 製作  
歡迎參與與創造 🌱
