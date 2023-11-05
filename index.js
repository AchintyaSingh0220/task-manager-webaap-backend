const express = require("express");
const Route = require("./controller/router");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//database
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:12345@cluster0.4hiqep6.mongodb.net");
var db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to DB");
});
db.on("error", () => {
    console.log("Error connecting to DB");
})

//mounting middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//mount router and start listening
app.use("/", Route);
app.listen(4000, () => {
    console.log("Backend Started");
});