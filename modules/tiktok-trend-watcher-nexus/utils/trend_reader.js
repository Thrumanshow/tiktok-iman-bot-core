// modules/tiktok-trend-watcher-nexus/utils/trend_reader.js

const fs = require('fs'); const path = require('path');

/**

Lee los archivos de log y extrae las tendencias más recientes. Devuelve un listado de tendencias agrupadas por frecuencia de aparición. */ function getRecentTrends(limit = 5) { const logsDir = path.join(__dirname, '..', '..', '..', 'logs'); const files = fs.readdirSync(logsDir).filter(file => file.endsWith('.log')); 

const trendsMap = new Map();

files.forEach(file => { const content = fs.readFileSync(path.join(logsDir, file), 'utf-8'); const lines = content.split('\n'); lines.forEach(line => { const trend = line.trim(); if (trend) { trendsMap.set(trend, (trendsMap.get(trend) || 0) + 1); } }); });

const sortedTrends = [...trendsMap.entries()] .sort((a, b) => b[1] - a[1]) .slice(0, limit);

return sortedTrends.map(([trend, count]) => ${trend} (${count})); }

// Modo CLI if (require.main === module) { const trends = getRecentTrends(); console.log('📊 Tendencias recientes:'); trends.forEach(t => console.log(- ${t})); }

module.exports = { getRecentTrends };

