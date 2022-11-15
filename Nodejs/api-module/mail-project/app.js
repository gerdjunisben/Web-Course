const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
const https = require("https");
const { HttpStatusCode } = require("axios");

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/sign-up.html");
})

app.post("/",function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;


    

    console.log(email)

    const data = {
        members:[{
            email_address:email,
            status:'subscribed',
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName
            }
        }]
    };

    var jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/57abd3b75c"
    const options ={
        method:"POST",
        auth:"Ben:1e3a511ecf8f5c589005717451559db2-us21"
    }

    const request = https.request(url,options,function(response){
        if(response.statusCode===200)
        {
            res.sendFile(__dirname + "/success.html");
        }
        else
        {
            res.sendFile(__dirname + "/fail.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
    
})


app.listen(process.env.PORT || 3000,function(){
    console.log("heard");
})

//1e3a511ecf8f5c589005717451559db2-us21
//57abd3b75c