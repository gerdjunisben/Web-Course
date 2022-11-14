const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
    https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric",function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.temp;
            const currentWeather = weatherData.weather.description;
            res.write("Feels like " + temp + " celcius");
            res.write("It is " +currentWeather);
            res.send();
        })
    });
})


app.listen(3000,function(){
    console.log("heard at 3000");
})