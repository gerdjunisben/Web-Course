const mongoose = require('mongoose');
const Fruit = require("../mongoose-module/Fruit")

process.setMaxListeners(1);
mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB").then(()=>console.log("connected")).catch(e=>{console.log(e)});


run();

async function run()
{
    Fruit.createCollection();

    const apple = new Fruit({
        name:'apple',
        rating:1,
        review:'terrible fruit'
    });

   apple.save().then(()=>console.log("connected")).catch(e=>{console.log(e)});;
    console.log(apple);
    
    
    
}



    


/*


apple.save();

/*
Fruit.insertMany([apple],(err)=>{
    if(err)
        console.log(err);
    else
        console.log("no error");
});


Fruit.find((err,fruits)=>{
    if(err)
        console.log(err);
    else
        fruits.forEach((f)=>{
            console.log(f.name);
        })
})

Fruit.updateOne({_id:},{field:},(err)=>callback)
*/



