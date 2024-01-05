const fetch = require("node-fetch");
const dotenv = require('dotenv')
const path = require("path")
dotenv.config({ path: path.join(__dirname, "../.env") })
// ---------- API Key && Container ----------

const client_id = process.env.Apikey2;
const premieresAnime = [];

// ---------- END ----------

// Fetch To Get 1000 Anime OF Premieres
const fetchPremieres = async () => {

  for (let i = 1; i < 21; i++) {
    const premieresUrl = `https://api.simkl.com/anime/premieres/new?page=${i}type=all&client_id=${client_id}`
    try {
      const premieresRawData = await fetch(premieresUrl);
      const paspremieresRawData = await premieresRawData.json();

      premieresAnime.push(...paspremieresRawData)
    } catch (error) {
      console.log(error)
    }
  }
  return premieresAnime;
}
// Export As A module To Use In StartUp .js OR (Something I have Not Decided)
module.exports = { fetchPremieres }