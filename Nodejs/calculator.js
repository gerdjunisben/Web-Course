const express = require('express')
const bodyParser= require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname +"/calculator.html")
});

function getInt(a)
{
  var b = Number.parseInt(a);
  if(Number.isInteger(b))
    return b;
  else
    return 0;
}

app.post('/', (req, res) => {
    var s1 = getInt(req.body.s1);   
    var s2 = getInt(req.body.s2);
    var h = getInt(req.body.h);

    
    

    if(s1==0 && s2==0 || s2==0 && h==0 || h==0 && s1==0)
    {
      res.send("You are very small");
    }
    else if(h==0)
    {
      res.send("Hypotenuse is " + (Math.sqrt(Math.pow(s1,2)+Math.pow(s2,2))));
    }
    else if(s1==0)
    {
      res.send("Side 1 is " + (Math.sqrt(Math.pow(h,2)-Math.pow(s2,2))));
    }
    else{
      res.send("Side 2 is " + (Math.sqrt(Math.pow(h,2)-Math.pow(s1,2))));
    }
    
    
});

app.listen(port, () => {
  console.log(`heard`)
});