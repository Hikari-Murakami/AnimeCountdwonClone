const mongoose = require("mongoose");

const premieresAnime_Schema = new mongoose.Schema(
  {
    title: { type: String },
    year: { type: Number },
    date: { type: String },
    url: { type: String },
    poster: { type: String },
    uid: { type: String, unique: true },
    ids: {
      simkl_id: { type: Number },
      slug: { type: String }
    },
    anime_type: { type: String },
    rank: { type: Number },
    ratings: {
      simkl: {
        rating: { type: Number },
        votes: { type: Number }
      },
      mal: {
        rating: { type: Number },
        votes: { type: Number }
      }
    }
  }
)

const Premieres = mongoose.model("Premiere", premieresAnime_Schema)
module.exports = { Premieres }
