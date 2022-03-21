const express = require('express');
const router = express.Router();
router.use(express.json())
const CardData = require("./carddetails.cjs");
router.post("/details", async (req, res) => {
    let token = new Date().getTime().toString() + Math.round(Math.random() * 100)
    console.log(req.body)
    const { cardDetails } = req.body;

    try {
        cardDetails.token = token;
        const myCardDetails = new CardData({ cardDetails });
        await CardData.create(myCardDetails);
        res.send(myCardDetails);
    } catch (err) {
        res.send({ message: err });
        console.log(err)
    }
});





module.exports = router;