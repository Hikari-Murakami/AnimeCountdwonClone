const fetch = require("node-fetch")
const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "../.env") })
const { Collection, Summary } = require("../mongo/mongooseSchemas")


const fetchSummary = async (arrayOfAnimeObjects, clientID) => {
  const summaryArray = [];
  for (const anime of arrayOfAnimeObjects) {
    try {
      const summaryURL = `https://api.simkl.com/anime/${anime.ids.simkl_id}?extended=full&client_id=${clientID}`;
      const summaryAnimeData = await fetch(summaryURL);
      const psSummaryAnimeData = await summaryAnimeData.json();
      summaryArray.push(psSummaryAnimeData)
    } catch (error) {
      console.log(error)
    }
  }
  return summaryArray;
}





const setupSummary = (skip = 0, limit = 10, clientID) => {

  Collection.find({}).skip(skip).limit(limit).then(async (data) => {
    const summary = await fetchSummary(data, clientID)

    await Summary.insertMany(summary)
    console.log(clientID)
    console.log(data)
    console.log(data.length)
  })
}




module.exports = { setupSummary }


