var express = require("express");
var path = require("path");
var moment = require('moment');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");

require("./routes/routes.js")(express, app, moment);

app.engine("html", require("hogan-express"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server running on: " + PORT + "!");
});