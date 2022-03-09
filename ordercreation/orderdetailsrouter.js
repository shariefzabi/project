const express=require("express");
const { db } = require("./orderdetailsSchema.js");
// const midwr=require('./ordersmiddleware')
const router = express.Router();
const Order = require('./orderdetailsSchema.js');
// const ordersController=require('./orderscontroller')

// router.post("/orderDetails",midwr.midw1,ordersController.addOrder)

let order = {};

router.post("/orderdetails", async (req, res) => {
    order = req.body
    console.log(order);

    try {
        const myOrder = new Order(order);
        await Order.create(myOrder);
        res.send(myOrder);
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)
    }
})


router.get('/', async (req, res) => {
    try {
        
        db.collection("orders").find().exec(function (err, result) {
            res.send(result)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})
module.exports = router