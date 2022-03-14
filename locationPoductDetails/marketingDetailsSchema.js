const mongoose = require("mongoose");


const cattleMarketSchema = new mongoose.Schema({
  animalId: { type: String, required: [true, "Id is required"], unique: true },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Out of Stock"],
  },
  image: { type: Buffer, required: true },
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
  animalId: { type: String, required: true, unique: true },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Out of Stock"],
  },
  image: { type: Buffer, required: true },
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
    locationName: {
      type: String, required: true, minlength: 3, maxlength: 20, unique: true
    },

    cattleMarkets: [cattleMarketSchema],
    sheepMarkets: [sheepMarketSchema],
  },
  { collection: "locationdbs" }
);
locationSchema.pre('save', function (next) {
  // capitalize
  this.locationName =
    this.locationName.trim()[0].toUpperCase() + this.locationName.slice(1).toLowerCase();
  next();
})
const Location = mongoose.model("locationDB", locationSchema);
module.exports = Location;



