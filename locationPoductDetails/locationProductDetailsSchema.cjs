const mongoose=require("mongoose");
const Location=new mongoose.Schema({
    locationDetails:{
        locationName:{type:String, required:true},
        cattleMarket:{
            animalId:{type:String, required:true},
            productCode:{type: String, required:true},
            availability:{type:String, required:true},
            price:{type:String, required:true},
            weight:{type:String, required:true},
            breed:{type:String, required:true},
            source:{type:String, required:true},
            certification:{type:String, required:true}
        }  ,
        sheepMarket:{
            animalId:{type:String, required:true},
            productCode:{type: String, required:true},
            availability:{type:String, required:true},
            price:{type:String, required:true},
            weight:{type:String, required:true},
            breed:{type:String, required:true},
            source:{type:String, required:true},
            certification:{type:String, required:true}
        }


    }
}
    
);
module.exports =mongoose.model("locationDetails",Location) ;