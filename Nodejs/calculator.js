const express = require('express')
const bodyParser= require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname +"/calculator.html")
});

app.post('/', (req, res) => {
    var a = Number.parseInt(req.body.num1);
    var b = Number.parseInt(req.body.num2);
    
    res.send("" + (a+b));
});

app.listen(port, () => {
  console.log(`heard`)
});