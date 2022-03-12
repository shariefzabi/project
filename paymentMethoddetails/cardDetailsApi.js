const express = require('express');
const router = express.Router();
router.use(express.json())
const Invoice = require("./carddetails.cjs");

router.get('/cost/:id', function (req, res) {
    let { params } = req;

    const locationdetails = req.app.get('locationCollection')
    // locationdetails.save();
    locationdetails.findOne({}, function (err, result) {
        if (err) {
            console.log(err);
            res.status(502).json(err)
        }
        else {
            if ("cattleMarkets" in result) {
                console.log("product details are available");
                let price = result.cattleMarkets[params.id].price;
                console.log("price", price)
                res.json(price)
            }
            else {
                console.log("product details are not available");
                res.json(null)
            }
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



let tokens = [];

router.post("/details", async (req, res) => {
    let token;
    token = Math.round(Math.random() * 1000000000000);
    console.log(tokens);
    if (tokens.includes(token)) {
        token = Math.round(Math.random() * 1000000000000);
        tokens.push(token);
    }
    else {
        tokens.push(token);
    }
    console.log(req.body)
    const { invoicedata } = req.body;

    try {
        invoicedata.token = token;
        const myInvoice = new Invoice({ invoicedata });
        await Invoice.create(myInvoice);
        res.send(myInvoice);
    } catch (err) {
        res.send({ message: err });
    }
});


module.exports = router;