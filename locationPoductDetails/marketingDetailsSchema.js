const mongoose = require("mongoose");

const fileImageSchema = new mongoose.Schema({
  fieldname: { type: String },
  originalname: { type: String },
  encoding: { type: String },
  mimetype: { type: String },
  destination: { type: String },
  filename: { type: String },
  path: { type: String },
  size: { type: Number }
});

const cattleMarketSchema = new mongoose.Schema({
  // animalId: { type: String, required: [true, "Id is required"], unique: true },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Out of Stock"],
  },
  quantity: { type: Number, required: true },
  type: { type: String, required: true },
  sex: { type: String, required: true, enum: ["Male", "Female"] },
  image: { type: fileImageSchema, required: true },
  price: { type: String, required: true },
  weight: { type: String, required: true },
  breed: { type: String, required: true },
  source: { type: String, required: true },
  locationName:{type:String,required: true },
  market:{type:String},
  certification: {
    type: String,
    required: true,
    enum: ["Certified", "Not Certified"],
  },
  created_on:{type:Number}
},{timestamps:true});

const sheepMarketSchema = new mongoose.Schema({
  // animalId: { type: String, required: true, unique: true },
  productCode: { type: String, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Out of Stock"],
  },
  image: { type: fileImageSchema, required: true },
  quantity: { type: Number, required: true },
  type: { type: String, required: true },
  sex: { type: String, required: true, enum: ["Male", "Female"] },
  price: { type: String, required: true },
  weight: { type: String, required: true },
  breed: { type: String, required: true },
  source: { type: String, required: true },
  locationName:{type:String,required: true },
  market:{type:String},
  certification: {
    type: String,
    required: true,
    enum: ["Certified", "Not Certified"],
  },
  created_on:{type:Number}
},{timestamps:true});
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



