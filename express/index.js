const express = require('express');
const mongoose=require("mongoose");
const Location  = require('./model/location');
require("dotenv").config();

const app = express();

const URI=process.env.DB_CONNECTION_STRING

app.use(express.json());

app.get("/", function (req, res) {
    
    res.send("Welcome to Home page")
})
app.get("/Locations", function (req, res) {
    let Locations =['tpt','hyd','viz']
 
   res.send({Locations: Locations } )
})

app.post("/create_Location", async (req, res)=> {
    const {locationName}=req.body
    try{
        const myLocation=new Location({locationName});
        await Location.create(myLocation);
        res.send(myLocation);
        
    }
    catch(err){
        res.send({message : err})

    }
   
})


mongoose.connect(URI, {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });


const customMiddleware=(req,res,next)=>{
    console.log('welcome to my middleware');
    next();
}
app.use(customMiddleware);
//fetching details from mangoatlas
const mclient= require("mongodb").MongoClient;
const dbUrl="mongodb+srv://LocationData:1234567890@cluster0.hn7hc.mongodb.net/test?retryWrites=true&w=majority"
mclient.connect(dbUrl,(err,client)=>{
    if(err){
        console.log("error",err)
    }
    else{
        let db=client.db("test")
        let dbcollection=db.collection("dbcollection") 
        db.collection("locationnames").find().toArray(function(err,res){
            if (err) throw err;
            console.log(res);
            client.close();
        })
    }
    
})



const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})



