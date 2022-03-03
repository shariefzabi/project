const express=require('express');
const router=express.Router();
const Location = require('./locationProductDetailsSchema.cjs');
const locationNames=require('./locationNamesSchema.cjs')

let locationdb={};

router.post("/location", async (req, res) => {
    locationdb = req.body
    try {
        const myLocation = new locationNames(locationdb );
        await locationNames.create(myLocation);
        res.send(myLocation);
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)

    }
})
router.get('/locations', async (req, res) => {
    try {
       
        const locationName=await locationNames.find({})
        res.json(locationName)
            
        }
        
    catch (err) {
        res.send({ message: err })
    }
})

router.post("/locationDetails", async (req, res) => {
    const { locationDetails } = req.body
    try {
        const myLocation = new Location({ locationDetails });
        await Location.create(myLocation);
        res.send(myLocation);
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)

    }
})

router.get('/locationProductDetails', async (req, res) => {
    try {
        Location.find().exec(function (err, result) {
            res.send(result)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})
module.exports=router