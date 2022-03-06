var express = require("express");
let router = express.Router();
router.use(express.json())
// const locationdetails = req.app.get('locationdbs')
const Invoice = require('./invoiceUniqueIDSchema')

// router.get("/:location/:market/:price", function (req, res) {
//     let productdetails = req.app.get("locationdbs")
//     let { params, body } = req;
//     console.log("params", params);
//     let locationName = params.location;

//     let whichmarket = params.market;

//     try {
//         console.log("location", locationName);
//         console.log("whichmarket", whichmarket);
//         productdetails.find({ locationName: locationName }).toArray(function (err, result) {
//             if (err) {
//                 console.log("error", err);
//             } else {
//                 // console.log("result", res);
//                 // let kiran = result[0]
//                 console.log("result", result[0].cattleMarkets[1].certification);
//                 let price = result[0].cattleMarkets[1].certification;
//                 res.send(price);
//                 // res.send(result[0]);
//             }
//         })
//         // productdetails.aggregate()
//     }
//     catch {
//         console.log("error", err)
//     }
// })
let tokens = [];
router.post("/:inoviceuniqueid", async (req, res) => {
    // let token = Math.round(Math.random() * 10000000000000);
    let token;

    console.log(tokens);
    if (tokens.length == 0 || tokens.includes(token)) {
        token = Math.round(Math.random() * 1000000000000);
        tokens.push(token);
    }
    else {
        token = Math.round(Math.random() * 1000000000000);
        tokens.push(token);
    }

    try {
        const myCard = new Invoice({ token });
        await Invoice.create(myCard);
        res.send(myCard);
    } catch (err) {
        res.send({ message: err });
    }
});

module.exports = router;