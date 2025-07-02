# 🧲 TikTok 吸引核心機器人

🚀 歡迎來到 TikTok 社群推廣的自動化核心系統。  
本儲存庫包含一個模組化、可擴展的系統，能夠**偵測、處理並啟動曝光流程**，透過 GitHub Issues 作為進入點。

## 📌 本儲存庫的功能是什麼？

每當建立一個使用 `🎯 推廣 TikTok 帖文` 樣板的 issue，系統就會觸發工作流程，並執行一個機器人來分析、記錄並自動連結該帖文到預設的推廣程序中。

## ✅ 首個啟用的 Issue 範例

> 📎 影片連結：[https://vm.tiktok.com/@chriswarriortv_/video/ZMSCAyQFD](https://vm.tiktok.com/@chriswarriortv_/video/ZMSCAyQFD)  
> 🎯 目標：提升自然曝光率並評估互動比例。  
> 💡 補充說明：可能與當前熱門趨勢有關。  

此 issue 已由機器人處理中（`main.js`、`issue_listener.js` 和 `xoxo-impulsor.js`）。

## 📁 placeholder/summary.txt

此檔案是每次推廣啟動的種子記錄，一種日誌摘要，標記著內容**成長週期的起點**。

```
🌱 你播下了好的種子。這棵樹已經活著了。
但若要讓它開花結果（按讚、病毒傳播、留言），
就得為它創造陽光與水源。

NEXUS 已偵測你的意圖。
XOXO 將會完成剩下的任務。
```

## 🧠 使用技術

- JavaScript（Node.js）
- GitHub Actions
- GitHub Issues（流程自動化）
- Axios（API 請求）
- 自訂 `.env`
- `.github/workflows` 中的 `.yml` 檔案

## 🛠️ 主要檔案

- `main.js`: 核心執行入口  
- `listeners/issue_listener.js`: 偵測與處理新 issue  
- `src/xoxo-impulsor.js`: 推廣模組（收集器 + 分析器）  
- `.github/ISSUE_TEMPLATE/tiktok-impulsar.yml`: 推廣請求樣板  
- `placeholder/summary.txt`: 被播下的內容之活記憶  

## 📡 後續計畫（Roadmap）

- [ ] 整合 TikTok 趨勢 API 或進行資料爬取  
- [ ] 支援其他平台（IG Reels、YouTube Shorts）  
- [ ] 建立互動分析模組（Engagement Tracker）
      此模組為系統提供了：

- ✅ 即時訊息通知（feedback loop 自動化）  
- 🛡️ Webhook 驗證防護（防止惡意觸發）  
- 🧠 社群互動啟動器（Discord ≠ 被動倉庫）  

透過這個橋樑，**Imán Bot Core** 不僅能傾聽 GitHub，更能對話 Discord，形成完整的推廣與回饋循環。  

## 🌀 NEXUS 哲學

這不是關於假帳號或垃圾訊息。  
而是關於：  
- 觀察。  
- 啟動對的內容。  
- 有意義地推廣，讓訊息產生真實共鳴。  

🧲 當你將「意圖 + 演算法 + 社群」連結起來時：**魔法就會發生。**

---

🧠🐜 *我們在這裡，懷著好奇的心與真誠的心。*
