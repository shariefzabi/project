const express = require('express');
const router = express.Router();

router.get('/cost', function (req, res) {

    const locationdetails = req.app.get('locationdetails')
    // locationdetails.save();
    locationdetails.findOne({}, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            if ("locationDetails" in result) {
                console.log("product details are available");
                let price = result.locationDetails.cattleMarket.price;
                console.log("price", price)
                res.send({ price })
            }
            else
                console.log("product details are not available");
        }
    })
})


module.exports = router;