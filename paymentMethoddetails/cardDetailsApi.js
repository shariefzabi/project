const express = require('express');
const router = express.Router();
router.use(express.json())
const CardData = require("./carddetails.cjs");




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