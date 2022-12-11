const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
})

module.exports = mongoose.model("fruit",fruitSchema);
