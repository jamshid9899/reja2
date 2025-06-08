console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

// MongoDB call
const db = require("./server").db();
// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// Routing code
app.post("/create-item", (req, res) => {
  // TODO: code with db here
   //res.send("Yangi item yaratildi!");
});

app.get("/", function (req, res) {
  res.render("reja");
});

// Serverni ishga tushirish


module.exports = app;
