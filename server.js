var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res, next){
    res.send("Timestamp Microservice");
});

app.get("/:unix", function(req, res, next){
    res.send(req.params);
});

app.use(bodyParser.json());


app.listen(PORT, function(){
console.log("Server running on: " + PORT + "!");
});