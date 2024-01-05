const mongoose = require("mongoose");

const Calender_Schema = new mongoose.Schema({
  title: { type: String },
  poster: { type: String },
  date: { type: Date },
  api_error: { type: Boolean, default: false },
  release_date: { type: String },
  rank: { type: Number },
  ratings: {
    type: Object,
    properties: {
      type: Object,
      simkl: {
        properties: {
          rating: {
            type: Number,
          },
          votes: {
            type: Number,
          },
        },
      },
    },
  },
  url: { type: String },
  ids: {
    type: Object,

    properties: {
      simkl_id: { type: String },
      slug: { type: String },
      tmdb: { type: String },
      mal: { type: Number },
    },
  },
  episode: {
    episode: { type: Number },
    url: { type: String },
  },

  anime_type: { type: String },
});

// This Functions Can Be Module . Since it was Use before in filterForCollection
function filterFirstEncounter(data) {
  if (data.length) {

    const arrayOfIds = data.map((anime) => anime.ids.simkl_id)


    const firstEncounterAnimes = raw.filter((anime, index) => {
      return arrayOfIds.indexOf(anime.ids.simkl_id) == index
    })
    return firstEncounterAnimes
  }
  else {
    console.log("No Data")
  }
}


// Filter Data By Type of anime , I created this so It might be use in future
function getAnimeType(raw, type) {
  return raw.filter((anime) => anime.anime_type == type.toLowerCase())
}

// Filter UpComming 
function getUpComming(raw, type) {
  if (type) {
    return raw.filter((anime) => {
      return anime.episode.episode == 1 && anime.anime_type == type.toLowerCase()
    })
  }
  else {
    return raw.filter((anime) => {
      return anime.episode.episode == 1
    })
  }

}
function getUpCommingV2(raw, type) {
  if (type) {
    return getAnimeType(raw, type).filter((anime) => anime.episode.episode == 1)
  }
  else {
    return raw.filter((anime) => {
      return anime.episode.episode == 1
    })
  }

}

// Static Method to git instance Airing 
Calender_Schema.statics.Airing = async function Airing() {
  try {
    const reawD = await this.find({ date: { $gte: new Date() } })
    return filterFirstEncounter(reawD)
  } catch (error) {
    console.log(error)
    console.log("DB PB")
  }
}

// Static Method to git instance Aired
Calender_Schema.statics.Aired = async function Aired() {
  try {
    const sixDaysAgo = new Date();
    sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
    const reawD = await this.find({ date: { $lt: new Date(), $gte: sixDaysAgo } })
    return filterFirstEncounter(reawD);
  }
  catch (e) {
    console.log(e)
    console.log(e.message)
  }
}

const Calender = mongoose.model("Calender", Calender_Schema);


module.exports = { Calender, getAnimeType, getUpComming, getUpCommingV2 };