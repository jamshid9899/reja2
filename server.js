console.log("Web serverni boshlash");

const express = require("express");
const http = require("http");
const app = express();

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session (agar kerak bo‘lsa keyin yoziladi)

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// Routing code
app.post("/create-item", (req, res) => {
  // TODO: code with db here
  res.send("Yangi item yaratildi!");
});

app.get("/", function (req, res) {
  res.render("reja2");
});

// Serverni ishga tushirish
const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
