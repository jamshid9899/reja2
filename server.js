const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://james12139899:76kLG8y1OjHoYYoy@cluster0.ujk8epb.mongodb.net/reja2?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3004
        ;
        server.listen(PORT, function () {
            console.log(
                `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        })
    }
});
