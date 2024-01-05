const mongoose = require("mongoose")
const animeCollection_Schema = new mongoose.Schema({
  title: {
    type: String
  },
  ids: {
    type: Object,
    properties: {
      simkl_id: { type: String },
      slug: { type: String },
      tmdb: { type: String },
      mal: { type: Number },
    },

  },
  url: { type: String }
})

const Collection = mongoose.model("AnimeCollection", animeCollection_Schema);

module.exports = { Collection };