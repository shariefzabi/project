const mongoose = require("mongoose");

const cattleMarketSchema = new mongoose.Schema({
    animalId: { type: String },
    productCode: { type: String },
    availability: { type: String },
    price: { type: String },
    weight: { type: String },
    breed: { type: String },
    source: { type: String },
    certification: { type: String }
});
const sheepMarketSchema = new mongoose.Schema({
    animalId: { type: String },
    productCode: { type: String },
    availability: { type: String },
    price: { type: String },
    weight: { type: String },
    breed: { type: String },
    source: { type: String },
    certification: { type: String }
})
const locationSchema = new mongoose.Schema(
    {
        locationName: { type: String },
        cattleMarkets: [cattleMarketSchema],
        sheepMarkets: [sheepMarketSchema]
    }
);
const Location = mongoose.model("locationData", locationSchema);
module.exports = Location