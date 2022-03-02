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
        var db = client.db("livestocklogin");
        var testcollection = db.collection("livestockLoginColl");
        testcollection.findOne({}, function (err, result) {
            if (err)
                console.log(err);
            else {
                console.log(result)
                if ("username" in result) {
                    console.log("user details are available");
                    var username = result.username;
                    console.log(username)
                }
                else console.log("either username  is not valid");
                if("password" in result) {
                    console.log("valid password");
                    var password = result.password;
                    console.log(password)
                }
                else
                    console.log("either  password is not valid");
            }

            
        });
        
        console.log("connected to db");
    }
});


app.listen(5005, function (err) {
    if (err) {
        console.log("err while connecting the server");
    }
    else {
        console.log("app connected succesfully");
    }
});