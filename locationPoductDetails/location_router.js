
const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const expressAsyncHandler = require("express-async-handler");
const { param } = require('express/lib/request');
const { ObjectId } = require('mongodb');
const router = express.Router();
const Location = require('./marketingDetailsSchema.js');

//post market details


let locationdb = {};

router.post("/marketDetails", async (req, res) => {
    locationdb = req.body
    console.log(" locationdb", locationdb);
    try {
        const myLocation = new Location(locationdb);
        await Location.create(myLocation);
        res.send(myLocation);
        res.send({ status: "success" })
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

// fetching selected product details

router.get('/selectedProductDetails/:id', async (req, res) => {
    let { params } = req
    let totalMarketsData = [];
    try {
        Location.find().exec(function (err, result) {
            result.map(function (e) {
                e.cattleMarkets.map(item => {
                    totalMarketsData.push(item)
                })
                e.sheepMarkets.map(item => {
                    totalMarketsData.push(item)
                })
            })
            const productData = totalMarketsData.filter(e => e.animalId === params.id);
            res.send(productData)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})


////////////////// Storing product details-----Team-5///////////////////
let cattleMarketData = {};
let sheepMarketData = {};
router.post("/addProducts",upload.single('fileData'), async (req, res) => {
    // console.log('req', req.body);
    let prodData = req.body;
    let {file} = req;
    
    try {
        console.log('productData', prodData);
        cattleMarketData =
        {
           
            productCode: "cow123",
            quantity:prodData.quantity,
            availability: prodData.availability,
            type:prodData.types,
            sex:prodData.sex,
            image: file,
            price: prodData.price,
            weight: prodData.weight,
            breed: prodData.breed,
            source: prodData.source,
            market:prodData.market,
            certification: prodData.certification,
        }
        sheepMarketData = {

            productCode: "sheep123",
            quantity:prodData.quantity,
            availability: prodData.availability,
            type:prodData.types,
            sex:prodData.sex,
            image: file,
            price: prodData.price,
            weight: prodData.weight,
            breed: prodData.breed,
            source: prodData.source,
            market:prodData.market,
            certification: prodData.certification,
        }
        Location.findOne({ locationName: prodData.location }).exec(function (err, result) {
            // console.log("before adding products",result);
            console.log("err", err);
            let cattleMarkets = result.cattleMarkets;
            let sheepMarkets = result.sheepMarkets;
            if (prodData.market == 'Cattle Market') {
                result.cattleMarkets.push(cattleMarketData)
                Location.updateOne({ locationName: prodData.location },
                    result
                ).exec(function (err, result) {
                    return res.send({ status: "success", result })
                })
                // Location.updateOne({ locationName: prodData.location },
                //     {$push:{cattleMarkets:cattleMarketData}}

                    // result
                // ).exec(function (err, result) {
                //     return res.send({ status: "success", result })
                // })
            } else if (prodData.market == 'Sheep Market') {
                result.sheepMarkets.push(sheepMarketData)
                Location.updateOne({ locationName: prodData.location },
                    result
                ).exec(function (err, result) {
                    return res.send({ status: "success", result })
                })
            }
            console.log("after adding products",result);
            // else
            // res.send({status:"success"})
        })
    }
    catch (err) {
        res.send({ message: err })
        console.log(err)
    }
})

// router.get("/latestProducts", async (req, res) => {
//     console.log("from /latestProducts");
//     try {
//         Location.find().select({image:0}).exec(function (err, result) {
//             console.log("allDocs",result);
//             if (err) throw err;
//             let allDocs = result;
//             let allProducts = [];
//             allDocs.forEach((doc)=>{
//                 doc.cattleMarkets.forEach(prod => {
//                     prod.locationName = doc.locationName;
//                     delete prod.image;
//                     allProducts.push(prod);
//                 })
//                 doc.sheepMarkets.forEach(prod => {
//                     prod.locationName = doc.locationName;
//                     delete prod.image;
//                     allProducts.push(prod);
//                 })
//             })
//             console.log("allProducts :",allProducts);
//             res.send(result);
            
//         })
//     }
//     catch (err) {
//         res.send({ message: err })
//     }
// });


//Fetching Particular AnimalId in particular location

router.get(
    "/get-animal/:locationName/:animalId",
    expressAsyncHandler(async (req, res) => {
        console.log(res);
        let locationName = req.params.locationName;
        let animalId = req.params.animalId;
        //   console.log(animalId);
        let locationdbs = await Location.findOne({ locationName: locationName });
        console.log(locationdbs);
        if (locationdbs == null) {
            res
                .status(200)
                .send({ message: "location does not exist with this location name" });
        } else {

            let animalData = locationdbs.cattleMarkets.find(
                (animal) => animal.animalId == animalId
            );
            if (animalData == null) {
                res.status(200).send({
                    message: "Animal data doesn't exist with this animal Id!!",
                });
            } else {
                data = {
                    price: animalData.price,
                    animalId: animalData.animalId,
                    weight: animalData.weight,
                    image: animalData.image,
                    breed: animalData.breed,
                    availability: animalData.availability,
                    certification: animalData.certification,
                    source: animalId.source
                };
                res.status(200).send({
                    message: "Animal data fetched successfully!!",
                    payload: data,
                });
                console.log(animalData);
            }
        }
    })
);



module.exports = router