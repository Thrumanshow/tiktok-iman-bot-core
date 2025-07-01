// trends/trend_fetcher.js
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const TRENDS_LOG_PATH = path.resolve('trends/logs/trends-log.json');

export async function fetchTikTokTrends() {
  try {
    const response = await axios.get('https://trends24.in/tiktok/');
    const dummyTrends = [
      '#CapCut', '#DanceChallenge', '#MakeItCount', '#ForYou', '#ViralSound'
    ]; // 🔁 Aquí iría el scraping real

    const logEntry = {
      timestamp: new Date().toISOString(),
      trends: dummyTrends
    };

    // Guardar en archivo
    fs.writeFileSync(TRENDS_LOG_PATH, JSON.stringify(logEntry, null, 2));
    console.log('🧠 Tendencias guardadas correctamente');

    return dummyTrends;
  } catch (error) {
    console.error('⚠️ Error al obtener tendencias de TikTok:', error.message);
    return [];
  }
}
