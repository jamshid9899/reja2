console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();
// const http = require("http");


//MongoODB connect
const db = require("./server").db();
//1kirissh
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if(err) {
//     console.log("Error:", err);
//   } else {
//     user = JSON.parse(data)
//   }
// });


//2 Session


//3 View code
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
//app.get("/hello", function (req, res) {
  //  res.end("Problem");
//});
//app.get("/gift", function (req, res) {
  //  res.end("salom Jamshid ");
//});
app.post("/create-item", (req, res) => {
    // console.log(req.body);
    // res.json({test: "success"});
});
// app.get('/author', (req, res) => {
//   res.render("author", { user: user});
// })

app.get("/", function (req, res) {
  res.render("Reja");
});
// const server = http.createServer(app);
// let PORT = 5002;
// server.listen(PORT, function () {
//     console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
//     );
// });

module.exports = app;