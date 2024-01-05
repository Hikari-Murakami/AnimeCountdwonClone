const mongoose = require("mongoose")


const trendingAnime_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    uid: {
      type: String,
      unique: true
    },
    url: {
      type: String
    },
    poster: {
      type: String
    },
    fanart: {
      type: String
    },
    ids: {
      simkl_id: {
        type: Number,
      },
      slug: {
        type: String
      },
      tmdb: {
        type: String
      }
    },
    release_date: {
      type: Date
    },
    rank: {
      type: Number
    },
    drop_rate: {
      type: String
    },
    watched: {
      type: Number
    },
    plan_to_watch: {
      type: Number
    },
    ratings: {
      simkl: {
        rating: {
          type: Number
        },
        votes: {
          type: Number
        }
      },
      mal: {
        rating: {
          type: Number
        },
        votes: {
          type: Number
        }
      }
    },
    country: {
      type: String
    },
    runtime: {
      type: String
    },
    status: {
      type: String
    },
    anime_type: {
      type: String
    },
    total_episodes: {
      type: Number
    },
    network: {
      type: String
    },
    metadata: {
      type: String
    },
    overview: {
      type: String
    },
    genres: {
      type: [
        String
      ]
    },
    trailer: {
      type: String
    }
  }
)

const Tranding = mongoose.model("Tranding", trendingAnime_Schema);

module.exports = { Tranding }