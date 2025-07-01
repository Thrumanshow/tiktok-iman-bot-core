// trends/suggestions_generator.js
import { getLatestTrends } from './trend_logger.js';
import fs from 'fs';
import path from 'path';

const SUGGESTIONS_PATH = path.resolve('trends/suggestions.md');

export function generateSuggestionsForUser(username = '@chriswarriortv_') {
  const trends = getLatestTrends();
  const ideas = trends.map(t => `🎯 Crear un video usando la tendencia **${t}**`);

  const markdown = `## Ideas sugeridas para ${username}\n\n${ideas.join('\n')}`;
  fs.writeFileSync(SUGGESTIONS_PATH, markdown);
  console.log('✅ Sugerencias generadas en trends/suggestions.md');
}
