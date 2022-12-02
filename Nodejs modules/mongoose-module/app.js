const mongoose = require('mongoose');

main().catch(err=>console.log(err));

async function main()
{
    mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

const fruitSchema = new mongoose.Schema({
    name:{type:String,
        require:true},

    rating:{type:Number,
            min:1,
            max:10},
    review:String
});

const Fruit = new mongoose.model("Fruit",fruitSchema);


const apple = new Fruit({
    name:'apple',
    rating:1,
    review:'terrible fruit'
});

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
*/
//Fruit.updateOne({_id:},{field:},(err)=>callback)



