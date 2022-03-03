const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3005;

//fetching of data from server
var mongoClient = require("mongodb").MongoClient;
var dburl =
  "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority";

let db;
let animalCollection;
mongoClient.connect(dburl, function (err, client) {
  if (err) {
    console.log(err);
  } else {
    db = client.db("test");
    animalCollection = db.collection("locationdetails");
    // animalCollection.findOne({}, function (err, result)
    animalCollection.findOne({}, function (err, result) {
      if (err) {
        console.log("Couldn't fetch the dara", err);
      } else {
        console.log(result.locationDetails.cattleMarket.breed);
        console.log(result.locationDetails.cattleMarket.price);
      }
    });
  }
});

app.listen(PORT, function (err, res) {
  if (err) throw err;
  console.log(
    `Application is started successfully and running on : ${PORT}...`
  );
});
