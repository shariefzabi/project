const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();

const PORT = 3005;
var mongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority";




let db;
let userCollection;
mongoClient.connect(dburl, function (err, client) {

    if (err) {
        console.log("err while connecting db");
    }
    else {
        db = client.db("test");
        // team -3 fetching cost of product
        locationdetails = db.collection("locationdetails");
        locationdetails.findOne({}, function (err, result) {
            if (err)
                console.log(err);
            else {
                if ("locationDetails" in result) {
                    console.log("product details are available");
                    let price = result.locationDetails.cattleMarket.price;
                    console.log(price)
                }
                else
                    console.log("product details are not available");
            }
        });



        console.log("connected to db");
    }

});

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.post("/user", function (req, res) {
    const { username, password } = req.body
    const user = {};
    userCollection.findOne({}, function (err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result)
            if ("username" in result) {
                console.log("user details are available");
                var username = result.username;
                user["username"] = result.username
                console.log(username)
            }
            else console.log("either username  is not valid");
            if ("password" in result) {
                console.log("valid password");
                var password = result.password;
                user["password"] = result.password
                console.log(password)
            }
            else
                console.log("either  password is not valid");
        }
        res.status(200).json(user)

    });
    res.send({ name: 'john' })
})
app.get("/", function (req, res) {
    let { body, params, query } = req;
    console.log("path:", req.url)
    console.log("params:", params);
    console.log("body:", body);
    console.log("query:", query);
    res.send("Welcome to Home page")
})







// card_details from team 3

const Card = require('./paymentMethoddetails/carddetails.cjs');
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

// invoice
app.post('/invoicedetails', async (req, res) => {
    let tokens = [];
    let token;
    token = Math.round(Math.random() * 10000000000000);
    let token1 = { "token": token }
    console.log("token1", token1);
    if (!tokens.includes(token)) {
        console.log(tokens);
    } else {
        tokens.push(token);
    }
    console.log("token", token);
    // try {
    //     const invoice = new uniqueInvoiceID({ token1 });
    //     await uniqueInvoiceID.create(invoice);
    //     res.send(invoice);
    // }
    // catch (err) {
    //     res.send({ message: err })
    // }

    const uniqueInvoiceID = new mongoose.Schema({}, { strict: false })
    const TestCollection = mongoose.model('invoicedetails', uniqueInvoiceID)
    // let body = req.body;
    const testCollectionData = new TestCollection({ token1 })
    await testCollectionData.save()
    return res.send({ status: "success", token, message: "Data Saved Successfully" })

})

// end card_details from team 3



//location product details code (team 4) .....starting

const locationRoutes = require('./locationPoductDetails/location_router.cjs')
app.use(locationRoutes)

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});

//location product details code (team 4) .....ending



// team 7
const Blog =require('./Blogs/schema.cjs');
const Comments =require('./Blogs/comschema.cjs')

app.get("/comments/:id", async (req, res) => {
    try {

        let { params } = req
        // console.log(params.id)
        const data = await Comments.find({ "comment.blog_id": params.id })
        res.json(data)
    } catch (err) {
        res.send('Error' + err)
    }
})
app.get("/blogs/:id", async (req, res) => {
    try {

        let { params } = req
        console.log(params.id)
        const data = await Blog.find({ "blogs.id": params.id })
        res.json(data)
    } catch (err) {
        res.send('Error' + err)
    }
})
//team 7 end
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})