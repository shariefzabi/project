var express = require("express");

var app = express();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://LocationData:1234567890@cluster0.hn7hc.mongodb.net/test?retryWrites=true&w=majority";
app.use(express.json());
app.get("/", function (req, res) {
    res.send("data recieved");
});
app.post("/", function (req, res) {
    var body = req.body;
    console.log(body)
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
                console.log(result)
                // if ("userId" in result) {
                //     console.log("user details are available");
                //     var userId = result.userId;
                //     console.log(userId);
                // }
                // else
                //     console.log("user details are not available");
            }
        });
        console.log("connected to db successfully");
    }
});

// console.log(post.postdata())

app.listen(5005, function (err) {
    if (err) {
        console.log("error while connecting the server");
    }
    else {
        console.log("app connected succesfully");
    }
});
