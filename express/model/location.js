const mongoose=require("mongoose");
const Location=new mongoose.Schema({
    locationName:{type:String,
        required:true,
        unique:true   
}
    
})
module.exports =mongoose.model("locationName",Location) ;