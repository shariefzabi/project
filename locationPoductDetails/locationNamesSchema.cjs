const mongoose=require("mongoose");
const locationNames=new mongoose.Schema({
    locationName:[{type:String}]
}
    
    
);
module.exports =mongoose.model("locationNames",locationNames) ;
