const express = require('express');
const mongoose = require("mongoose");
const Card = require('./carddetails.cjs');


const app = express();

const URI = "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority"

app.use(express.json());

app.get("/", function (req, res) {

    res.send("Welcome to Home page")
})

app.get("/carddetails/:id", async (req, res) => {
    try {

        let { params } = req
        console.log(params.id)
        const locations = await Card.findOne({ "cardDetails.CVV": params.id })
        res.json(locations)
    } catch (err) {
        res.send('Error' + err)
    }
})
app.post("/carddetails", async (req, res) => {
    const { cardDetails } = req.body
    try {
        const myCard = new Card({ cardDetails });
        await Card.create(myCard);
        res.send(myCard);

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
const dbUrl = "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority"
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



