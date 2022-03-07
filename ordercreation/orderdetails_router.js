const express=require("express")
// const midwr=require('./ordersmiddleware')
const router = express.Router();
const Order = require('./orderdetailsSchema.js');
// const ordersController=require('./orderscontroller')

// router.post("/orderDetails",midwr.midw1,ordersController.addOrder)

let orderdb = {};

router.post("/orderdetails", async (req, res) => {
    orderdb = req.body
    console.log(orderdb);
    try {
        const myOrder = new Order(orderdb);
        await Order.create(myOrder);
        res.send(myOrder);
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)
    }
})
module.exports = router