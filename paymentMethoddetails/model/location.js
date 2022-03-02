const mongoose = require("mongoose");
const Location = new mongoose.Schema({

    carddetails: {
        id:{type:Number},

    carddetails: {
        cardNumber: { type: Number, required: true, min: 100000000000, max: 999999999999, },
        Month: { type: Number, required: true, min: 1, max: 12 },
        year: { type: Number, required: true, min: 22 },
        CVV: { type: Number, required: true, max: 000, max: 333 }
    }
}
}

);
module.exports = mongoose.model("carddetails", Location);