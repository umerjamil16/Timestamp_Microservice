var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res, next){
    res.send("Timestamp Microservice");
});

app.listen(PORT, function(){
console.log("Server running on: " + PORT + "!");
});