const mongoose = require("mongoose");


const cattleMarketSchema = new mongoose.Schema({
  animalId: { type: String, required: [true, "Id is required"] },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Out Of Stock"],
  },
  price: { type: String, required: true },
  weight: { type: String, required: true },
  breed: { type: String, required: true },
  source: { type: String, required: true },
  certification: {
    type: String,
    required: true,
    enum: ["Certified", "Not Certified"],
  },
});
const sheepMarketSchema = new mongoose.Schema({
  animalId: { type: String, required: true },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Out Of Stock"],
  },
  price: { type: String, required: true },
  weight: { type: String, required: true },
  breed: { type: String, required: true },
  source: { type: String, required: true },
  certification: {
    type: String,
    required: true,
    enum: ["Certified", "Not Certified"],
  },
});
const locationSchema = new mongoose.Schema(
  {
    locationName: { type: String, required: true, minlength: 3, maxlength: 20 ,unique:true , lowercase:true},
    cattleMarkets: [cattleMarketSchema],
    sheepMarkets: [sheepMarketSchema],
  },
  { collection: "locationdbs" }
);
const Location = mongoose.model("locationDB", locationSchema);
module.exports = Location;
