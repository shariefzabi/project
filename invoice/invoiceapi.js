const express = require('express');
const router = express.Router();
router.use(express.json())
router.get("/details", async (req, res) => {
    try {
        let { useremail } = req.query;
    
        const ordercollection = req.app.get('ordercollection')

    
        ordercollection.find({ paymentStatus: "payment success", email: useremail }).sort({ "_id": -1 }).toArray(function (err, result) {
            res.send(result)
        
            
        })
    }
    catch (err) {
        res.status(400).send("error while fteching invoice data ")
    }
});


module.exports = router;