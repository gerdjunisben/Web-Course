const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/day.js")


const app = express();
let items=[];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    
    let day = date();
    res.render("list",{kindOfDay:day,newListItem:items});

    res.send();
});

app.post("/", function(req,res){
    let item =req.body.newItem;
    items.push(item);
    res.redirect("/");
})



app.listen(3000,function(){
    console.log("Heard");
})