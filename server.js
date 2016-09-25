var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

//libs
var bodyParser = require("body-parser");
var moment = require('moment');
var chrono = require('chrono-node');
moment().format();


app.get("/", function(req, res, next){
    res.send("Timestamp Microservice");
});

app.get("/:unix", function(req, res, next){
    //converting unix to natural date
    if(!isNaN(req.params.unix)){
    var naturalDate = moment.unix(req.params.unix).toString().slice(4, 16);
    res.send(naturalDate);
    }else{
        var date = req.params.unix.toString();
//        var str = date.toString();
        var spl = date.split(",");
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
            month =111;
        }

        //year: spl[1]
        //month: split2[0]
        //day: split2[1];
        res.send(
            "Month: " + month + "/n" + 
            "Day: " + split2[1] + "/n" + 
            "Year: " + spl[1]);
    }
//converting natural date to unix
    //    var abc = chrono.strict.parseDate('2015-12-15');
  //  console.log( "chrono: " + abc);

});

app.use(bodyParser.json());
app.listen(PORT, function(){
console.log("Server running on: " + PORT + "!");
});