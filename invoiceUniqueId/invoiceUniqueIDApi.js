var express = require("express");
let router = express.Router();
router.use(express.json())
// const locationdetails = req.app.get('locationdbs')
const Invoice = require('./invoiceUniqueIDSchema')


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