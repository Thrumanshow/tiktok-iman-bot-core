// trend_analyzer.js
function analyzeTrends(trends, threshold = 1000000) {
  return trends.filter(trend => trend.views >= threshold);
}

module.exports = { analyzeTrends };
