const express = require("express");
const app = express();
const path = require("path");
const { Calender } = require("./mongo/mongooseSchemas")
const mongoose = require("./mongo/mongooseConnect");
const { convertMilliseconds } = require("./js/timeconverter");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.listen("8080", () => {
  console.log("Listening In port 8080");
});

app.get("/", (req, res) => {
  res.render("home-page.ejs");
});
app.get("/home", (req, res) => {
  Calender.Airing().then((data) => {
    if (data) {
      res.render("sub-page.ejs", { arrayOfAiring: data, convertMilliseconds });
    } else {
      console.log("Not found")
    }

  })

});