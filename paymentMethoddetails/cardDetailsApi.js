const express = require('express');
const router = express.Router();
router.use(express.json())
const Card = require("./carddetails.cjs");

// router.get('/cost/:locationname/:id', function (req, res) {
//     let { params } = req;

//     const productDetails = req.app.get('locationCollection')
//     // locationdetails.save();
//     productDetails.findOne({ locationName: params.locationname }, function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(502).json(err)
//         }
//         else {
//             if ("cattleMarkets" in result) {
//                 console.log("product details are available");
//                 let price = result.cattleMarkets[params.id].price;
//                 console.log("price", price)
//                 res.json(price)
//             }
//             else {
//                 console.log("product details are not available");
//                 res.json(null)
//             }
//         }
//     })
// })
router.get("/:location/:market/:id", function (req, res) {
    let productdetails = req.app.get("locationCollection")
    let { params, body } = req;
    console.log("params", params);
    let locationName = params.location;
    var Market = params.market;
    try {
        productdetails.findOne({ locationName: locationName }, function (err, result) {

            if (err) {

                console.log("error", err);
                res.status(502).json(err)

            } else {

                let price = result[Market][params.id].price;

                res.json(price);

            }

        })



    }

    catch {

        console.log("error", err)

    }

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
   
    try {
        const { cardDetails } = req.body;
        const myCard = new Card({ cardDetails });
        await Card.create(myCard);
        res.send(myCard);
    } catch (err) {
        res.send({ message: err });
    }
});


module.exports = router;