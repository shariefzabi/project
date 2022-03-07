const express = require('express');
const router = express.Router();
const Location = require('./marketingDetailsSchema.js');

//post market details


let locationdb = {};
let newLocation = '';

router.post("/marketDetails", async (req, res) => {
    locationdb = req.body
    try {
        const myLocation = new Location(locationdb);
        await Location.create(myLocation);
        res.send(myLocation);
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)

    }
})

// post new location

router.post('/newLocation', async (req, res) => {
    newLocation = req.body;
    try {
        Location.create(newLocation)
        res.send(newLocation);
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)

    }
})

// fetching entire market details

router.get('/marketDetails', async (req, res) => {
    try {
        Location.find().exec(function (err, result) {
            res.send(result)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})

//fecthing exact location market details (params)

router.get('/marketDetails/:name', async (req, res) => {
    let { params } = req
    try {
        Location.find({ "locationName": params.name }).exec(function (err, result) {
            res.send(result)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})


//fetching all location names

router.get('/locations', async (req, res) => {
    try {
        Location.find().exec(function (err, result) {
            const locNames = result.map(function (e) {

                return e.locationName;
            });
            // console.log(locNames)
            res.send(locNames)
        })

    }
    catch (err) {
        res.send({ message: err })
    }
})

module.exports = router