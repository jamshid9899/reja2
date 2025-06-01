console.log("web serverni boshlash")
const express = require("express")
const app = express();
const http = require("http");

//1kirissh
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//2 Session


//3 View code
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
app.get("/problem", function (req, res) {
    res.end("Problem");
});
app.get("/gift", function (req, res) {
    res.end("salom Jamshid ");
});
const server = http.createServer(app);
let PORT = 4000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}`);
});