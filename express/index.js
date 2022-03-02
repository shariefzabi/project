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


app.post("/create_Location", async (req, res)=> {
    const {locationDetails}=req.body
    try{
        const myLocation=new Location({locationDetails});
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


const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})



