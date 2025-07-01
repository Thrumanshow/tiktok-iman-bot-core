// trends/trend_logger.js
import fs from 'fs';
import path from 'path';

const logFile = path.resolve('trends/logs/trends-log.json');

export function getLatestTrends() {
  try {
    const data = fs.readFileSync(logFile, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.trends || [];
  } catch {
    return [];
  }
}
