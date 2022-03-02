const exp = require("express");
const app = exp()

const mClient= require("mongodb").MongoClient;

const dbUrl="mongodb+srv://LocationData:1234567890@cluster0.hn7hc.mongodb.net/test?retryWrites=true&w=majority"
app.use(exp.json());
var database
var myobj
app.get("/",(req,res)=>{
    res.send("Data recieved")
});
app.get("/blogs",(req,res)=>{
    database.collection('blogs').find({}).toArray((err,result)=>{
        if (err) throw err 
        res.send(result)
    })
})
app.post('/blogs/addblogs',(req,res)=>{
   let result1= database.collection('blogs').find({}).sort({id:-1}).limit(1)
   result1.forEach(obj=>{
       if(obj){
           let blogs={
              
               title:req.body.title,
               description:req.body.description,
               date:req.body.date



           }
           database.collection('blogs').insertOne(blogs,(err)=>{
               if(err) res.status(500).send(err)
               
           })
       }
   })
})
// app.put("/blogs/:id",(res,req)=>{
//    let query={id:parseInt(req.parm.id)}
//    let blogs={
//        id:parseInt(req.parms.id),
//        name:req.body.name
//    }
//    let dataSet = {
//        $set:blogs
//    }
//    database.collection('blogs').updateOne(query,dataSet,(err,result)=>{
//        if(err) throw error 
//        res.send(blogs)
//    })
// })

app.listen(3000,()=>{
    mClient.connect(dbUrl,(err,result)=>{
        if( err) throw err;
        database=result.db("livestockBlogs")
        console.log("server running on port 3000");
    })
    
})