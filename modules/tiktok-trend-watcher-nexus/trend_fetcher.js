// trend_fetcher.js
const mockTrends = [
  { tag: "#verano2025", views: 1250000 },
  { tag: "#aiart", views: 350000 },
  { tag: "#funnycats", views: 8000000 },
];

function fetchTrends() {
  return Promise.resolve(mockTrends); // futuro: scrape o API
}

module.exports = { fetchTrends };
