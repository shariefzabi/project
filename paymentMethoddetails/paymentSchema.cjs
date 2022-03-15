const mongoose = require("mongoose");
const paymentStatus = new mongoose.Schema({
     
        orderId: { type: Number, required: true },
        payment: { type: String, required: true }

    
    }

);
module.exports = mongoose.model("paymentStatus", paymentStatus);