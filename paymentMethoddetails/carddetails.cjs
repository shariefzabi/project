const mongoose = require("mongoose");
const Invoice = new mongoose.Schema({

    invoicedata: {
        payment: { type: String, required: [true, "Id is required"] },
        orderId: { type: Number, required: [true, "Id is required"] },
        token: { type: Number },
        cardNumber: { type: Number, required: true, min: 100000000000, max: 999999999999, },
        Month: { type: Number, required: true, min: 1, max: 12 },
        year: { type: Number, required: true, min: 22 },
        CVV: { type: Number, required: true, max: 000, max: 999 },
        date: { type: String, required: true }
    }
}
);
module.exports = mongoose.model("invoicedata", Invoice);


// const mongoose = require("mongoose");
// const Card = new mongoose.Schema({
//     cardDetails: {
//         cardNumber: { type: Number, required: true, min: 100000000000, max: 999999999999, },
//         Month: { type: Number, required: true, min: 1, max: 12 },
//         year: { type: Number, required: true, min: 22 },
//         CVV: { type: Number, required: true, max: 000, max: 999 },
//     }
// }
// );
// module.exports = mongoose.model("cardDetails", Card);

// { "invoiceDetails": {
//     "orderId": 12345677,
//     "cardNumber": 123456789012,
//     "Month":12,
//     "year": 24,
//     "CVV": 234,
//     "type": "cow",
//     "quantity": "2",
//     "sex": "Male",
//     "weight": "5Kg",
//     "breed": "breed",
//     "deliverylocation": "location",
//     "deliveryperiod": "1-7",
//     "deliverymode": "offline"
//     }
// }
