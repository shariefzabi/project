var express = require("express");
var app = express();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://shariff_zabi:Zabi2000@cluster0.pfkv2.mongodb.net/livestockdb?retryWrites=true&w=majority";
app.use(express.json());
app.get("/", function (req, res) {
    res.send("data recieved");
});
app.post("/", function (req, res) {
    var body = req.body;
    console.log(body);
});
mongoClient.connect(url, function (err, client) {
    if (err) {
        console.log("err while connecting db");
    }
    else {
        var db = client.db("livestockdb");
        var testcollection = db.collection("livestockColl");
        testcollection.findOne({}, function (err, result) {
            if (err)
                console.log(err);
            else {
                if ("product" in result) {
                    console.log("product details are available");
                    var product = result.product;
                    if ("cost" in product) {
                        console.log("ready to pay");
                    }
                    else
                        console.log("cost of product is  not available");
                }
                else
                    console.log("product details are not available");
            }
        });
        console.log("connected to db");
    }
});
app.listen(3000, function (err) {
    if (err) {
        console.log("err while connecting the server");
    }
    else {
        console.log("app connected succesfully");
    }
});
