const fetch = require("node-fetch");
const path = require("path")
require('dotenv').config({ path: path.join(__dirname, "../.env") })

// ---------- API Key && Container ----------

const client_id = process.env.Apikey1;
console.log(client_id)
const TrendingAnimeRaw = [];

// ---------- END ----------

// Fetch To Get 1000 Anime OF Tranding
const fetchTranding = async () => {

  for (let i = 1; i < 21; i++) {
    const trendingURL = `https://api.simkl.com/anime/trending/?page=${i}&wltime=month&extended=overview,metadata,tmdb,genres,trailer&client_id=${client_id}`;
    try {
      const trendingRawData = await fetch(trendingURL);
      const pastrendingRawData = await trendingRawData.json();
      TrendingAnimeRaw.push(...pastrendingRawData)
    } catch (error) {
      console.log(error)
    }
  }
  return TrendingAnimeRaw;
}

// Export As A module To Use In StartUp .js OR (Something I have Not Decided)
module.exports = { fetchTranding }