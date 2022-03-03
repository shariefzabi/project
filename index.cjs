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
        db = client.db("livestocklogin");
        userCollection = db.collection("user");


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









//location product details code (team 4) .....starting

const locationRoutes=require('./locationPoductDetails/location_router.cjs')

app.use(locationRoutes)

mongoose.connect(dburl, {

    useNewUrlParser: true,

    useUnifiedTopology: true

}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});

//location product details code (team 4) .....ending


app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})