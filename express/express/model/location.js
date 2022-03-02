const mongoose = require("mongoose");
const Location = new mongoose.Schema({
    //     locationDetails:{
    //         locationName:{type:String},
    //         cattleMarket:{
    //             animalId:{type:String},
    //             productCode:{type: String},
    //             availability:{type:String},
    //             price:{type:String},
    //             weight:{type:String},
    //             breed:{type:String},
    //             source:{type:String},
    //             certification:{type:String}
    //         }  ,
    //         sheepMarket:{
    //             animalId:{type:String},
    //             productCode:{type: String},
    //             availability:{type:String},
    //             price:{type:String},
    //             weight:{type:String},
    //             breed:{type:String},
    //             source:{type:String},
    //             certification:{type:String}
    //         }

    // }

    carddetails: {
        cardNumber: { type: Number, required: true, min: 100000000000, max: 999999999999, },
        Month: { type: Number, required: true, min: 1, max: 12 },
        year: { type: Number, required: true, min: 22 },
        CVV: { type: Number, required: true, max: 000,max: 333 }
    }
}

);
module.exports = mongoose.model("carddetails", Location);