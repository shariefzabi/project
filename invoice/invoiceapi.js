const express = require('express');
const router = express.Router();
router.use(express.json())
router.get('/productdetails/:id', function (req, res) {

    const locationdbs = req.app.get('locationdbs')
    let { params } = req;

    // locationdetails.save();
    locationdbs.findOne({}, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            if ("cattleMarkets" in result) {
                // console.log("product details are available");
                let productdetails = result.cattleMarkets[params.id];
                // console.log("price", price)
                res.send(productdetails)
            }
            else
                console.log("product details are not available");
        }
    })
})

router.get("/accountdetails/:id", async (req, res) => {
    const carddetails = req.app.get('carddetails')


    let { params } = req;

    const loc = await carddetails.findOne({ "cardDetails.CVV": params.id - 0 })
    res.json(loc)


})

module.exports = router;