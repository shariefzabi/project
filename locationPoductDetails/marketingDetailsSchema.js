const mongoose = require("mongoose");


const cattleMarketSchema = new mongoose.Schema({
  animalId: { type: String, required: [ "Id is required"] },
  productCode: { type: String  },
  availability: {
    type: String,
    
    enum: ["In Stock", "Out Of Stock"],
  },
  price: { type: String  },
  weight: { type: String},
  breed: { type: String },
  source: { type: String },
  certification: {
    type: String,
   
    enum: ["Certified", "Not Certified"],
  },
});
const sheepMarketSchema = new mongoose.Schema({
  animalId: { type: String },
  productCode: { type: String},
  availability: {
    type: String,
   
    enum: ["In Stock", "Out Of Stock"],
  },
  price: { type: String },
  weight: { type: String },
  breed: { type: String },
  source: { type: String},
  certification: {
    type: String,
    
    enum: ["Certified", "Not Certified"],
  },
});
const locationSchema = new mongoose.Schema(
  {
    locationName: { type: String, required: true, minlength: 3, maxlength: 20 },
    cattleMarkets: [cattleMarketSchema],
    sheepMarkets: [sheepMarketSchema],
  },
  { collection: "locationdbs" }
);
const Location = mongoose.model("locationDB", locationSchema);
module.exports = Location;
