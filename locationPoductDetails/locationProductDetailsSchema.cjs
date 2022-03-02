const mongoose=require("mongoose");
const Location=new mongoose.Schema({
    locationDetails:{
        locationName:{type:String},
        cattleMarket:{
            animalId:{type:String},
            productCode:{type: String},
            availability:{type:String},
            price:{type:String},
            weight:{type:String},
            breed:{type:String},
            source:{type:String},
            certification:{type:String}
        }  ,
        sheepMarket:{
            animalId:{type:String},
            productCode:{type: String},
            availability:{type:String},
            price:{type:String},
            weight:{type:String},
            breed:{type:String},
            source:{type:String},
            certification:{type:String}
        }


    }
}
    
);
module.exports =mongoose.model("locationDetails",Location) ;