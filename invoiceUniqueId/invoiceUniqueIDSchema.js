const mongoose = require('mongoose')
const Invoice = new mongoose.Schema({

    token: Number

})
module.exports = mongoose.model("invoicedetails", Invoice)