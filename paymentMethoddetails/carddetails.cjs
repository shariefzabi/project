const mongoose = require("mongoose");
const CardData = new mongoose.Schema({

    cardDetails :{

        payment: { type: String, required: [true, "Id is required"] },

        token: { type: String },
        cardNumber: { type: Number, required: true, min: 100000000000, max: 999999999999, },
        Month: { type: Number, required: true, min: 1, max: 12 },
        year: { type: Number, required: true, min: 22 },
        CVV: { type: Number, required: true, max: 000, max: 999 },

    }
}
);
module.exports = mongoose.model("carddatas", CardData);


