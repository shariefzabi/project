const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 3005;
var mongoClient = require("mongodb").MongoClient;
var dburl =
  "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority";

let db;
let userCollection;
mongoClient.connect(dburl, function (err, client) {
  if (err) {
    console.log("err while connecting db");
  } else {
    db = client.db("test");
    userCollection = db.collection("user");
    locationdbs = db.collection("locationdbs");
    let carddetails = db.collection("carddetails");
    app.set("carddetails", carddetails);
    app.set("locationCollection", locationdbs);
    console.log("connected to db");
  }
});

// team -3 fetching cost of product and posting card
let productCost = require("./paymentMethoddetails/cardDetailsApi.js");
let cardDetail = require("./paymentMethoddetails/cardDetailsApi.js");

let invoice = require("./invoice/invoiceapi");

// let invoice = require("./invoice/invoiceapi.js")

app.use("/product", productCost);
app.use("/card", cardDetail);
app.use("/invoicedetails", invoice);

// end

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//*********** No.1 Team ************* Starting **************************

app.post("/users/signup", function (req, res) {
  console.log("log from signup users", req.body);
  let userDb = db.collection("users");
  userDb.findOne({ _id: req.body._id }, function (err, result) {
    if (err) console.log(err);
    if (result == null) {
      userDb.insert(req.body);
      res.send("success");
    } else res.send("This email is already registered");
  });
});

app.post("/users/login",function(req,res){
  console.log("log from login users",req.body);
  let userDb = db.collection("users");
  userDb.findOne({_id:req.body.username,password:req.body.password},function (err,result){
    if (err) console.log(err);
    if (result == null)
    res.send("Invalid credentials")
      // res.send("No account found with this username, please sign up and then login");
    else
    res.send("success");
  })
});

//************ No.1 Team ************* Ending *****************************

//team-2 storing order details
app.post("/orderdetails", function (req, res) {
  let orderdetails = req.body;
  console.log(orderdetails);
  let orderDb = db.collection("orders");
  orderDb.insert(orderdetails);
  res.send(orderdetails);
});
//team-2 ending

app.get("/", function (req, res) {
  let { body, params, query } = req;
  console.log("path:", req.url);
  console.log("params:", params);
  console.log("body:", body);
  console.log("query:", query);
  res.send("Welcome to Home page");
});

// team -3invoice
app.post("/invoicedetails", async (req, res) => {
  let tokens = [];
  let token;
  token = Math.round(Math.random() * 10000000000000);
  let token1 = { token: token };
  console.log("token1", token1);
  if (!tokens.includes(token)) {
    console.log(tokens);
  } else {
    tokens.push(token);
  }
  console.log("token", token);
  // try {
  //     const invoice = new uniqueInvoiceID({ token1 });
  //     await uniqueInvoiceID.create(invoice);
  //     res.send(invoice);
  // }
  // catch (err) {
  //     res.send({ message: err })
  // }

  const uniqueInvoiceID = new mongoose.Schema({}, { strict: false });
  const TestCollection = mongoose.model("invoicedetails", uniqueInvoiceID);
  // let body = req.body;
  const testCollectionData = new TestCollection({ token1 });
  await testCollectionData.save();
  return res.send({
    status: "success",
    token,
    message: "Data Saved Successfully",
  });
});

// end invoice

//location product details code (team 4) .....starting

//fetching complete market details(/market/marketDetails)
//fecthing exact location market details -params (/market/marketDetails/:name)
//fetching all location names (/market/locations)

const locationRoutes = require("./locationPoductDetails/location_router.js");
app.use("/market", locationRoutes);

mongoose.connect(
  dburl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

//location product details code (team 4) .....ending

//team 6 start
// let animalAPI = require("./cart/cart_details.js");
// app.use("/animal", animalAPI);
let router = require("./cart/cart_details.js");
app.use("/animal", router);
//team 6 end

// team 7
const Blog = require("./Blogs/schema.cjs");
const Comments = require("./Blogs/comschema.cjs");

app.get("/comments/:id", async (req, res) => {
  try {
    let { params } = req;
    // console.log(params.id)
    const data = await Comments.find({ "comment.blog_id": params.id });
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});
app.get("/blogs/:id", async (req, res) => {
  try {
    let { params } = req;
    console.log(params.id);
    const data = await Blog.find({ "blogs.id": params.id });
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});

app.get("/comments", async (req, res) => {
  try {
    const data = await Comments.find({});
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const data = await Blog.find({});
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});

app.post("/addblogs", async (req, res) => {
  const { blogs } = req.body;
  try {
    const myBlog = new Blog({ blogs });
    await Blog.create(myBlog);
    res.send(myBlog);
  } catch (err) {
    res.send({ message: err });
  }
});

app.post("/addcomment", async (req, res) => {
  const { comment } = req.body;
  try {
    const mycom = new Comments({ comment });
    await Comments.create(mycom);
    res.send(mycom);
  } catch (err) {
    res.send({ message: err });
  }
});

//team 7 end
app.listen(PORT, function (err, res) {
  if (err) throw err;
  console.log(
    `Application is started successfully and running on : ${PORT}...`
  );
});
