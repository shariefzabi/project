const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const butcheryAPI = express();
butcheryAPI.use(express.json());
var dburl =
  "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoClient = require("mongodb").MongoClient;
let db;
mongoClient.connect(dburl, function (err, client) {
  if (err) {
    console.log("err while connecting db");
  } else {
    db = client.db("test");
  }
});

butcheryAPI.post(
  "/add-butchery",
  expressAsyncHandler(async (req, res) => {
    let butchery = req.body;
    let butcheryDb = db.collection("butchery");
    let butcheryData = await butcheryDb.findOne({ email: butchery.email });
    if (butcheryData != null) {
      res.status(200).send({ message: "Butchery already exists!" });
    } else {
      butcheryDb.insertOne(req.body);
      res.status(200).send("success");
    }
  })
);
butcheryAPI.use((err, req, res, next) => {
  res.send({ message: err.message });
});
module.exports = butcheryAPI;
