const fetch = require("node-fetch");
require("dotenv").config();
dotenv.config({ path: path.join(__dirname, "../.env") })

//  ---------- Function Format Date ----------

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("-");
}
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

//  ---------- END ----------


// ---------- Set Today Date ----------

const TDdate = new Date();
TDdate.setHours(0, 0, 0, 0);
TDdate.setDate(TDdate.getDate() + 32);

//  ---------- END ----------


// ---------- API Key && Container ----------

const clientID = process.env.Apikey1;
console.log(clientID);
const rawData = []

//  ---------- END ----------



//----------   Fetch Data Form simkl.com API ---------- 
const fetchAnime1Year = async () => {
  // Try Calender First > Now Can Skip 33 Days Of Fetch Data Process 
  try {
    const dataOf33Days = await fetch("https://data.simkl.in/calendar/anime.json");
    const psDataOf33Days = await dataOf33Days.json();
    // Pass Into Container
    rawData.push(...psDataOf33Days);
  } catch (error) {
    console.log(error);
    console.log("Fail To GET 33Days OF Data");
  }
  // I Would Lop 323 Time To get A Year Of Data
  for (let index = 0; index < 3; index++) {
    // Build String Template
    const airingURL =
      `https://api.simkl.com/anime/airing?date=${formatDate(
        TDdate
      )}&sort=time&client_id=${clientID}`;
    // Indent To Next Day
    TDdate.setDate(TDdate.getDate() + 1);

    // Fetch IN TRY
    try {
      const dailyFetchData = await fetch(airingURL);
      const psDailyFetchData = await dailyFetchData.json();

      // Check Empty Or Error
      if (!psDailyFetchData || psDailyFetchData.error) {

        console.log(`Empty Day ${TDdate}`);
        console.log(psDailyFetchData)
      }
      else {
        // Make Sure TO Get Correct Data 
        const psDailyFetchDataDateADD = psDailyFetchData.map((anime) => {

          if (!anime.date) {
            anime.date = TDdate;
            console.log(`Date ADDED ${TDdate}`)
            return anime
          }
          else if (new Date(anime.date) < TDdate) {
            anime.date = TDdate;
            anime.api_error = true;
            console.log(`API Errror${TDdate}`)
            console.log(anime)
            return anime
          }
          else { return anime }

        }).filter(Boolean)
        // Pass Into Container
        rawData.push(...psDailyFetchDataDateADD);
      }

    } catch (error) {
      console.log(error);
      console.log("Fail To GET Data");
    }
  }
  return rawData
}


// Export As A module To Use In StartUp .js OR (Something I have Not Decided)
module.exports = { fetchAnime1Year };