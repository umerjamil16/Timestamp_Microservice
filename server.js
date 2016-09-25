var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

//libs
var bodyParser = require("body-parser");
var moment = require('moment');
var chrono = require('chrono-node');
moment().format();

var obj ={};

app.get("/", function(req, res, next){
    res.send("Timestamp Microservice");
});

app.get("/:unix", function(req, res, next){
    //converting unix to natural date
    if(!isNaN(req.params.unix)){
        obj.unix = req.params.unix;
        obj.natural = moment.unix(req.params.unix).toString().slice(4, 16);
    }else{
        obj.natural = req.params.unix;

        var spl = req.params.unix.toString().split(",");
        var split2 = spl[0].split(" ");
        
        var year = spl[1];
        var day = split2[1];
        var month =0;

        if(split2[0] == "December"){
            month =12;
        }else if (split2[0] == "January"){
            month =1;
        }else if (split2[0] == "February"){
            month =2;
        }else if (split2[0] == "March"){
            month =3;
        }else if (split2[0] == "April"){
            month =4;
        }else if (split2[0] == "May"){
            month =5;
        }else if (split2[0] == "June"){
            month =6;
        }else if (split2[0] == "July"){
            month =7;
        }else if (split2[0] == "August"){
            month =8;
        }else if (split2[0] == "September"){
            month =9;
        }else if (split2[0] == "October"){
            month =10;
        }else if (split2[0] == "November"){
            month =11;
        }
        var natDate = year + "." + month + "." + day;
        console.log("Nat date:" + natDate);

        obj.unix = new Date(natDate).getTime() / 1000;

    }

        res.send(obj);

});

app.use(bodyParser.json());
app.listen(PORT, function(){
console.log("Server running on: " + PORT + "!");
});