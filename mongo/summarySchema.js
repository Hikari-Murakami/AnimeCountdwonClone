const mongoose = require("mongoose");

const summaryAnime_Schema = new mongoose.Schema({
  title: {
    type: "String",
  },
  year: {
    type: "Number",
  },
  type: {
    type: "String",
  },
  ids: {
    simkl: {
      type: "Number",
    },
    slug: {
      type: "String",
    },
    anidb: {
      type: "String",
    },
    ann: {
      type: "String",
    },
    mal: {
      type: "String",
    },
    anfo: {
      type: "String",
    },
    wikien: {
      type: "String",
    },
    allcin: {
      type: "String",
    },
    imdb: {
      type: "String",
    },
    offjp: {
      type: "String",
    },
    crunchyroll: {
      type: "String",
    },
    anilist: {
      type: "String",
    },
    kitsu: {
      type: "String",
    },
    livechart: {
      type: "String",
    },
    anisearch: {
      type: "String",
    },
    animeplanet: {
      type: "String",
    },
  },
  en_title: {
    type: "Mixed",
  },
  rank: {
    type: "Number",
  },
  poster: {
    type: "String",
  },
  fanart: {
    type: "String",
  },
  first_aired: {
    type: "Date",
  },
  airs: {
    day: {
      type: "String",
    },
    time: {
      type: "String",
    },
    timezone: {
      type: "String",
    },
  },
  runtime: {
    type: "Number",
  },
  certification: {
    type: "Mixed",
  },
  overview: {
    type: "String",
  },
  genres: {
    type: ["String"],
  },
  country: {
    type: "String",
  },
  total_episodes: {
    type: "Number",
  },
  status: {
    type: "String",
  },
  network: {
    type: "String",
  },
  anime_type: {
    type: "String",
  },
  ratings: {
    simkl: {
      rating: {
        type: "Number",
      },
      votes: {
        type: "Number",
      },
    },
    imdb: {
      rating: {
        type: "Number",
      },
      votes: {
        type: "Number",
      },
    },
    mal: {
      rating: {
        type: "Number",
      },
      votes: {
        type: "Number",
      },
      rank: {
        type: "Number",
      },
    },
  },
  trailers: {
    type: ["Mixed"],
  },
  users_recommendations: {
    type: ["Mixed"],
  },
});

const Summary = mongoose.model("AnimeSummary", summaryAnime_Schema);

module.exports = { Summary };