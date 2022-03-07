const mongoose = require("mongoose");
const productsSchema = {
    image: Buffer,
    quantity: Number,
    weight: String,
    breed: String,
    source: String,
    Location: String,
}
const Product = mongoose.model("Product",productsSchema)
module.exports = Product;