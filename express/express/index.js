const express = require('express');
const mongoose = require("mongoose");
const Location = require('./model/location');
require("dotenv").config();

const app = express();

const URI = process.env.DB_CONNECTION_STRING

app.use(express.json());

app.get("/", function (req, res) {

    res.send("Welcome to Home page")
})

app.get("/carddetails/:id", async (req, res) => {
    try {
        
        let { params } = req
        const locations = await Location.findOne({ id: params.id })
        res.json(locations)
    } catch (err) {
        res.send('Error' + err)
    }
})
app.post("/carddetails", async (req, res) => {
    const { carddetails } = req.body
    try {
        const myLocation = new Location({ carddetails });
        await Location.create(myLocation);
        res.send(myLocation);

    }
    catch (err) {
        res.send({ message: err })

    }

})




mongoose.connect(URI, {

    useNewUrlParser: true,

    useUnifiedTopology: true

}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});


const customMiddleware = (req, res, next) => {
    console.log('welcome to my middleware');
    next();
}
app.use(customMiddleware);
const mclient = require("mongodb").MongoClient;
const dbUrl = "mongodb+srv://shariff_zabi:Zabi2000@cluster0.pfkv2.mongodb.net/livestockdb?retryWrites=true&w=majority"
mclient.connect(dbUrl, (err, client) => {
    if (err) {
        console.log("error", err)
    }
    else {
        let db = client.db("livestockdb")
        let dbcollection = db.collection("carddetails")
        db.collection("carddetails").find().toArray(function (err, res) {
            if (err) throw err;
            console.log("res", res);
            client.close();
        })
    }

})



const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})



