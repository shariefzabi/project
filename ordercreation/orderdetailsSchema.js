const mongoose = require('mongoose')

const orderDetailsSchema = new mongoose.Schema({
    orderId: { type: String, required: [true, "Id is required"] },
    productdetails: {
        type: { type: String, required: true },
        quantity: { type: String, required: true },
        sex: { type: String, required: true },
        weight: { type: String, required: true },
        breed: { type: String, required: true },
    },
    deliverydetails: {
        deliverylocation: { type: String, required: true },
        deliveryperiod: { type: String, required: true },
        deliverymode: { type: String, required: true }
    }
});

module.exports=mongoose.model("order",orderDetailsSchema);