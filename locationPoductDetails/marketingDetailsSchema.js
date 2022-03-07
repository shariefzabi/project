const mongoose = require("mongoose");


const cattleMarketSchema = new mongoose.Schema({
  animalId: { type: String, required: [true, "Id is required"] },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    default: null,
    enum: ["In Stock", "Out Of Stock"],
  },
  price: { type: String, required: true, default: null },
  weight: { type: String, required: true, default: null },
  breed: { type: String, required: true, default: null },
  source: { type: String, required: true, default: null },
  certification: {
    type: String,
    required: true,
    default: null,
    enum: ["Certified", "Not Certified"],
  },
});
const sheepMarketSchema = new mongoose.Schema({
  animalId: { type: String, required: true, default: null },
  productCode: { type: String, required: true, default: null },
  availability: {
    type: String,
    required: true,
    default: null,
    enum: ["In Stock", "Out Of Stock"],
  },
  price: { type: String, required: true, default: null },
  weight: { type: String, required: true, default: null },
  breed: { type: String, required: true, default: null },
  source: { type: String, required: true, default: null },
  certification: {
    type: String,
    required: true,
    default: null,
    enum: ["Certified", "Not Certified"],
  },
});
const locationSchema = new mongoose.Schema(
  {
    locationName: { type: String, required: true, unique: true, minlength: 3, maxlength: 20 },
    cattleMarkets: [cattleMarketSchema],
    sheepMarkets: [sheepMarketSchema],
  },
  { collection: "locationdbs" }
);
const Location = mongoose.model("locationDB", locationSchema);
module.exports = Location;
