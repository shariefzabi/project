const express = require('express');
const router = express.Router();
router.use(express.json())
router.get("/details", async (req, res) => {
    let { useremail } = req.query;
    // console.log(useremail);
    const ordercollection = req.app.get('ordercollection')

    // let ordercollection = db.collection("orders");
    ordercollection.find({ paymentStatus: "payment success", email: useremail }).sort({ "_id": -1 }).toArray(function (err, result) {
        res.send(result)
    })
});


module.exports = router;