const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Animetest", { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => {
    console.log("connection Open");
  }).catch((e) => {
    console.log(e);
    console.log("Connection Failed")
  });


module.exports = mongoose;