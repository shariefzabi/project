const mongoose=require("mongoose");
const Location=new mongoose.Schema({
    locationName:{type:String}
}
    
)
module.exports =mongoose.model("locationName",Location) ;