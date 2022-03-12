const express = require('express');
const router = express.Router();
router.use(express.json())
// router.get('/productdetails/:id', function (req, res) {

//     const locationdbs = req.app.get('locationdbs')
//     let { params } = req;

//     // locationdetails.save();
//     locationdbs.findOne({}, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             if ("cattleMarkets" in result) {
//                 // console.log("product details are available");
//                 let productdetails = result.cattleMarkets[params.id];
//                 // console.log("price", price)
//                 res.send(productdetails)
//             }
//             else
//                 console.log("product details are not available");
//         }
//     })
// })

// router.get("/accountdetails/:id", async (req, res) => {
//     const carddetails = req.app.get('carddetails')


//     let { params } = req;

//     const loc = await carddetails.findOne({ "cardDetails.CVV": params.id - 0 })
//     res.json(loc)


// })

// router.post("/details", async (req, res) => {
//     console.log(req.body)

//     try {
//         data = req.body


//         const myInvoice = new Card({ data });
//         await Card.create(myInvoice);
//         res.send(myInvoice);
//     } catch (err) {
//         res.send({ message: err });
//     }
// });
router.get("/details", async (req, res) => {

    try {
        const invoiceCollection = req.app.get('invoiceCollection')
        // sort1 = ["invoicedata"]["orderId"]
        // const invoiceDetails = invoiceCollection.find().sort({ sort1: 1 }).collation({
        //     locale: "en_US",
        //     numericOrdering: true
        // }).toArray(function (err, result) {
        //     let sorted = result.sort((a, b) => a.invoicedata.localeCompare(b.invoicedata));

        //     res.json(result)
        //     console.log("the result", result[0])
        // })
    
        const invoiceDetails = invoiceCollection.find().sort({ _id: -1 }).collation().toArray(function (err, result) {
    

            res.json(result)
            console.log("the result", result[0])
        })
    }
    catch (err) {
        console.log(err)
        res.json(err)
    }
})


module.exports = router;