const express = require('express');
const router = express.Router();
router.use(express.json())
const Card = require("./carddetails.cjs");

router.get('/cost/:id', function (req, res) {
    let { params } = req;

    const locationdetails = req.app.get('locationdbs')
    // locationdetails.save();
    locationdetails.findOne({}, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            if ("cattleMarkets" in result) {
                console.log("product details are available");
                let price = result.cattleMarkets[params.id].price;
                console.log("price", price)
                res.send( price )
            }
            else
                console.log("product details are not available");
        }
    })
})

router.get("/details/:id", async (req, res) => {
    try {
        let { params } = req;
        console.log(params.id);
        const locations = await Card.findOne({ "cardDetails.CVV": params.id });
        res.json(locations);
    } catch (err) {
        res.send("Error" + err);
    }
});
router.post("/details", async (req, res) => {
    console.log(req.body)
    const { cardDetails } = req.body;
    try {
        const myCard = new Card({ cardDetails });
        await Card.create(myCard);
        res.send(myCard);
    } catch (err) {
        res.send({ message: err });
    }
});


module.exports = router;