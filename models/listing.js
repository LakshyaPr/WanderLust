const mongoose = require("mongoose") ; 
const Schema  = mongoose.Schema ; 

const listingSchema = new Schema({
    title : {
        type : String ,
        required : true , 
    },
    description : String ,
    image : {
        type : String ,
        set : (v) => v === "" ? "https://i.pinimg.com/736x/36/0a/2a/360a2a090ea7a364e63141d53eb2dc01.jpg" : v,
        default : "https://i.pinimg.com/736x/36/0a/2a/360a2a090ea7a364e63141d53eb2dc01.jpg"
    },
    price : Number ,
    location : String ,
    country : String ,
})

const Listing = mongoose.model("Listing" , listingSchema); 
module.exports = Listing ;
