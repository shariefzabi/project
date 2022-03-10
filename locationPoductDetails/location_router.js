const express = require('express');

const router = express.Router();
const Location = require('./marketingDetailsSchema.js');

//post market details


let locationdb = {};

router.post("/marketDetails", async (req, res) => {
    locationdb = req.body
    console.log(" locationdb", locationdb);
    try {
        // const myLocation = new Location(locationdb);
        // await Location.create(myLocation);
        // res.send(myLocation);
        res.send({status:"success"})
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
////////////////// Storing product details-----//////////
let cattleMarketData = {};
let sheepMarketData = {};
router.post("/updateDetails", async (req, res) => {
    // console.log('req', req.body);
    let prodData = req.body
    try {
        console.log('productData', prodData);
        // const ProdData = new Location(prodData);
        // if(prodData.market === 'cattleMarkets') {
        cattleMarketData =
        {
            animalId:"222",
            productCode: "c23ds",
            availability: prodData.availability,
            image: prodData.image,
            price: prodData.price,
            weight: prodData.weight,
            breed: prodData.breed,
            source: prodData.source,
            market: prodData.market,
            certification: prodData.certification,
        }


        // console.log("cattlemarket")
        // } else
        sheepMarketData = {
            
            animalId:"200",
            productCode: "c23ds",
            availability: prodData.availability,
            image: prodData.image,
            price: prodData.price,
            weight: prodData.weight,
            breed: prodData.breed,
            source: prodData.source,
            certification: prodData.certification,
        }
        // console.log("cattlemarket")
         console.log("hello murali sir");
        Location.findOne({locationName: prodData.location}).exec(function (err, result) {
            console.log("result",result);
            console.log("err",err);
            let cattleMarkets= result.cattleMarkets;
            let sheepMarkets = result.sheepMarkets;
            if(prodData.market=='cattleMarkets'){
                result.cattleMarkets.push(cattleMarketData)
                Location.updateOne({locationName:prodData.location},
                    result
                    // {cattleMarkets:{$set:[...result.cattleMarkets,cattleMarketData]}}
                    ).exec(function(err,result){
                       return res.send({status:"success",result})
                    })
            }else if(prodData.market=='sheepMarkets'){
                result.sheepMarkets.push(sheepMarketData)
                Location.updateOne({locationName:prodData.location},
                    result
                    // {cattleMarkets:{$set:[...result.cattleMarkets,cattleMarketData]}}
                    ).exec(function(err,result){
                       return res.send({status:"success",result})
                    })
            }
         // else
            // res.send({status:"success"})
        })
        // const collectionData = new Location(
        //     {
        //         locationName: prodData.location,
        //         cattleMarkets: cattleMarketData,
        //         sheepMarkets: sheepMarketData,
        //     }
        // );
        // var adddata = Location.create(collectionData);
        // await adddata;
        // res.send(adddata);
        // console.log(collectionData)
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)
    }
})




module.exports = router