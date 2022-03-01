const express = require("express");

const app = express()

const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://Pradeep07:Pradeep%4007@pradeep-07-shard-00-00.iuxlm.mongodb.net:27017,pradeep-07-shard-00-01.iuxlm.mongodb.net:27017,pradeep-07-shard-00-02.iuxlm.mongodb.net:27017/livestockdb?ssl=true&replicaSet=atlas-9wsou2-shard-0&authSource=admin&retryWrites=true&w=majority"

//mongodb+srv://shariff_zabi:Zabi2000@cluster0.pfkv2.mongodb.net/livestockdb?retryWrites=true&w=majority

app.get("/",function(err,res){
   res.send("welcome to mongo atlas")
//    console.log(res);
   
     
 })

mongoClient.connect(url, function (err, client) {
    if (err) {

        console.log(err)

    }

    else {
       
        let db = client.db("livestockdb");
        let testcollection= db.collection("livestockcol")
        
        testcollection.findOne({}, function (err, result) {
            if(err){
                console.log("error occured while fetching product details",err);
            }
            else{
            //    if("product details" in result){
            //        console.log("product details available");
            //    }
                console.log(result)
            }

        }
        )}



    
    // if (err) {

    //     console.log("err while connecting db",err);



    // }

    // if(!err)
    //    {
    //     let db= res.db("livestockdb")
    //     let testcollection=db.collection("livestockcol")
    //     console.log("db connected succefully");
    //    }

   

    })



app.listen(5005, function (err) {

    if (err) {

        console.log("err while connecting the server")

    }

    else {

        console.log("app connected succesfully")

    }

})