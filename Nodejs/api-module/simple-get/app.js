const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
    https.get("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3,4&_fields=school.name&api_key=nSTCffEr2yiN7QOxzqiGTZ4W0SGs7YJTXz9WitvF&per_page=1",function(response){
        response.on("data", function(data){
            const schoolData = JSON.parse(data);
            res.write(schoolData.name);
            res.send();
        })
    });
})


app.listen(3000,function(){
    console.log("heard at 3000");
})