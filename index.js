const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static('uploads'));
app.use(express.json())

const PORT = 3005;
var mongoClient = require("mongodb").MongoClient;
var dburl =
  "mongodb://LocationData:1234567890@cluster0-shard-00-00.hn7hc.mongodb.net:27017,cluster0-shard-00-01.hn7hc.mongodb.net:27017,cluster0-shard-00-02.hn7hc.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g18s7s-shard-0&authSource=admin&retryWrites=true&w=majority";

let db;
let userDb;
mongoClient.connect(dburl, function (err, client) {
  if (err) {
    console.log("err while connecting db");
  } else {
    db = client.db("test");
    userDb = db.collection("users");
    locationdbs = db.collection("locationdbs");
    let carddetails = db.collection("carddetails");
    let invoiceCollection = db.collection("invoicedatas");
    let orderDetails = db.collection("invoicedatas");
    app.set("carddetails", carddetails);
    app.set("locationCollection", locationdbs);
    app.set("");
    app.set("invoiceCollection", invoiceCollection);
    console.log("connected to db");
  }
});

// team -3 fetching cost of product and posting card
let productCost = require("./paymentMethoddetails/cardDetailsApi.js");
let cardDetail = require("./paymentMethoddetails/cardDetailsApi.js");
let invoice = require("./invoice/invoiceapi");
let InvoiceUniqueID = require("./invoiceUniqueId/invoiceUniqueIDApi");

// let invoice = require("./invoice/invoiceapi.js")

app.use("/card", cardDetail);
app.use("/invoicedetails", invoice);
app.use("/invoice", InvoiceUniqueID);
app.use("/payment", cardDetail);

app.post("/paymentstatus", async (req, res) => {
  let { paymentStatus,date } = req.body;
  console.log(req.body);
  let ordercollection = db.collection("orders");
  ordercollection.find().sort({ _id: -1 }).limit(1).toArray(function (err, result) {
    orderid = result[0]["orderId"]
    console.log(orderid)
    res.send(result)
    ordercollection.updateOne({ orderId: orderid }, { $set: { date: date, paymentStatus: paymentStatus } })

  })
});
app.get("/invoicedetails", async (req, res) => {
  let orderdetails = req.body;
  console.log(orderdetails);
  let ordercollection = db.collection("orders");
  ordercollection.find({ paymentStatus: "payment success" }).sort({ "orderId": -1 }).toArray(function (err, result) {
    res.send(result)
  })
});

// app.post("/orders/orderdetails/:orderid", function (req, res) {
//   // let orderdetails = req.body;
//   let { params, body, headers } = req;
//   console.log("body", body);
//   console.log("par", params.orderid - 0);

//   let query = { orderId: params.orderid - 0 };
//   let status = { $set: body }
//   let ordercollection = db.collection("orders");
//   ordercollection.updateOne(query, status, function (err, result) {
//     if (!err) {
//       console.log("res", result);
//       res.send({ status: "success" });
//     }
//     if (err) {
//       console.log("err", err);
//       res.send({ status: "failure" });
//     }
//   })
// });


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
  userDb.findOne({ _id: req.body.email }, { projection: { _id: 0 } }, function (err, result) {
    if (err) console.log(err);
    if (result == null) {
      req.body.token = String(createToken())
      userDb.insertOne({ ...req.body, _id: req.body.email });
      // console.log("signup",req.body);
      res.send(["success", req.body]);
    } else res.send(["failed", "This email is already registered"]);
  });
});

const createToken = () => {
  return Math.floor(Math.random() * 900000) + 100000
}
app.post("/users/login", function (req, res) {
  console.log("log from login users :", req.body);
  userDb.findOne(
    { _id: req.body.username, password: req.body.password }, { projection: { _id: 0 } },
    function (err, result) {
      if (err) console.log(err);
      if (result == null) res.send("Invalid credentials");
      // res.send("No account found with this username, please sign up and then login");
      else {
        result.token = String(createToken());
        userDb.updateOne({ _id: result.email }, { $set: { token: result.token } });
        // console.log("result from login",result);
        res.send(result)
      };
    }
  );
});
app.get("/users/:token", function (req, res) {
  // console.log("get token :",req.params);
  userDb.findOne(req.params, { projection: { _id: 0 } }, function (err, result) {
    if (err) throw err;
    if (result == null) res.send("null")
    else res.send(result)
  })
})
app.post("/users/:token", function (req, res) {
  userDb.updateOne(req.params, { $set: req.body }, function (err, result) {
    if (err) throw err;
    // if (result==null) res.send("null")
    // else res.send(result)
  })
})
app.post("/users/reset/:token", function (req, res) {
  console.log("reset :", req.body, req.params);
  userDb.findOne(req.params, function (err, result) {
    if (err) throw err
    console.log("result", result);
    if (req.body.oldPassword == result.password) {
      userDb.updateOne(req.params, { $set: { password: req.body.newPassword } })
      res.send(["success", "Password updated successfully"])

    }

    else
      res.send(["failed", "Incorrect password"])
  })
})

//************ No.1 Team ************* Ending *****************************



//team-2 
//getting product filter details
app.get("/orders/productfilters", async (req, res) => {
  let filterdetails = req.body;
  // console.log(filterdetails);
  let filtercollection = db.collection("productfilters");

  filtercollection.find().toArray(function (err, result) {
    // console.log(result);

    res.send(result)
  })
});
let products = [];
app.post("/orders/products", async (req, res) => {
  let filterdetails = req.body;
  products = [];
  // console.log("filterdetails:",filterdetails);
  let filtercollection = db.collection("locationdbs");
  filtercollection.find().toArray(function (err, result) {
    filterdetails.forEach((filterdetails) => {
      result.forEach((ele, i) => {
        if (filterdetails.type === "Cow") {
          // let cattle = [];
          ele.cattleMarkets.forEach((item, index) => {
            if (item.breed === filterdetails.breed && !products.includes(item)) {
              products.push(item);
            }
          })
          // return cattle;
        }

        else if(filterdetails.type === "Sheep"){
  
          // let cattle = [];
          ele.sheepMarkets.forEach((item, index) => {
            if (item.breed === filterdetails.breed && !products.includes(item)) {
              products.push(item);
            }
          })
          // return cattle;
        }
        else if (filterdetails.type === "Pig") {

          // let cattle = [];
          ele.cattleMarkets.forEach((item, index) => {
            if (item.breed === filterdetails.breed && !products.includes(item)) {
              products.push(item);
            }
          })
          // return cattle;
        }
      })
    })

    // console.log("result",result);
    // console.log("products",products);
    res.send(products)
  })
});

app.get("/orders/orderdetails", async (req, res) => {
  let orderdetails = req.body;
  // console.log(orderdetails);
  let ordercollection = db.collection("orders");
  ordercollection.find().sort({ "orderId": -1 }).limit(1).toArray(function (err, result) {
    res.send(result)
  })
});
//storing order details
app.post("/orders/orderdetails", function (req, res) {
  let orderdetails = req.body;
  // console.log("odetails",orderdetails);
  let ordercollection = db.collection("orders");
  ordercollection.count(function (err, result) {
    if (err) console.log(err);
    else {
      if (result == 0) {
        orderdetails.orderId = 1;
      } else {
        orderdetails.orderId = result + 1;
      }
      // const newdate=new Date();
      // orderdetails.date=`${newdate.getDay()}/${newdate.getMonth()}/${newdate.getFullYear()}`;
      // console.log(orderdetails.date);
      ordercollection.insertOne(orderdetails);
      res.json(orderdetails);
    }
  })
});
app.post("/orders/orderdetails/:orderId", async (req, res) => {
  let {price} = req.body;
  // let deliveryprice=req.body.deliveryprice;
  let orderid=req.params.orderId;
  console.log(req.body,req.params);
  let ordercollection = db.collection("orders");
  ordercollection.find().sort({ orderId: -1 }).limit(1) .toArray(function (err, result) {
    // orderid = result[0]["orderId"]
    // console.log(orderid)
    ordercollection.updateOne({ orderId: orderid }, { $set: { price: price } })
    res.send(result)
  })
});


//fetching order details based on username
app.get('/orders/orderdetails/:uname', async (req, res) => {
  let { params } = req
  console.log(params.uname);
  let ordercollection = db.collection("ordersdisplay");

  ordercollection.find({ "username": params.uname }).toArray(function (err, result) {
    if (err) console.log(err);
    else res.send(result)
  })

})
//storing wishlists
app.post("/orders/wishlists", function (req, res) {
  let wishlistdetails = req.body;
  // console.log(wishlistdetails);
  let wishlistcollection = db.collection("wishlists");
  wishlistcollection.count(function (err, result) {
    if (err) console.log(err);
    else {
      wishlistcollection.insertOne(wishlistdetails);
      res.json(wishlistdetails);
    }
  })
});

//deleting whislist from team 4


app.delete("/orders/wishlists/:id", function (req, res) {
  let { params } = req;

  try {
    let ordercollection = db.collection("wishlists");
    ordercollection.deleteOne({
      "product._id": (params.id.toString())
    })

  }
  catch (err) {
    res.send({ message: err })
  }

})

//fetching whishlist based on username
app.get('/orders/wishlists/:uname', async (req, res) => {
  let { params } = req
  console.log(params.uname);
  let ordercollection = db.collection("wishlists");
  ordercollection.find({ "email": params.uname }).toArray(function (err, result) {
    if (err) console.log(err);
    else res.send(result)
  })

})

//team-2 ending

app.get("/", function (req, res) {
  let { body, params, query } = req;
  console.log("path:", req.url);
  console.log("params:", params);
  console.log("body:", body);
  console.log("query:", query);
  res.send("Welcome to Home page");
});

//location product details code (team 4) .....starting

//fetching complete market details(/market/marketDetails)
//fecthing exact location market details -params (/market/marketDetails/:name)
//fetching all location names (/market/locations)

const locationRoutes = require("./locationPoductDetails/location_router.js");
app.use("/market", locationRoutes);

mongoose.connect(
  dburl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    autoIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

//location product details code (team 4) .....ending

//team 6 start
// let animalAPI = require("./cart/cart_details.js");
// app.use("/animal", animalAPI);
let butcheryAPI = require("./butchery/butchery.js");
app.use("/butchery", butcheryAPI);

let router = require("./cart/cart_details.js");
app.use("/animal", router);

let agentAPI = require("./agentform/agent.js");
app.use("/agents", agentAPI);

//team 6 end

// team 7
const Blog = require("./Blogs/schema.cjs");
const Comments = require("./Blogs/comschema.cjs");


app.get("/comments/:id", async (req, res) => {
  try {
    let { params } = req;
    console.log(Comments.find({ "id": params.id }));
    const data = await Comments.find({ "id": params.id });
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});
// app.get("/blogs/:id", async (req, res) => {
//   try {
//     let { params } = req;
//     // console.log(params.id);
//     const data = await Blog.find({ "id": params.id });
//     res.json(data);
//   } catch (err) {
//     res.send("Error" + err);
//   }
// });
app.get("/blogs/:id", async (req, res) => {
  try {
    let { params } = req;
    console.log(Blog.find({ "id": params.id }));
    const data = await Blog.find({ "id": params.id });
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


// app.post("/addblogs", async (req, res) => {
//   const { blogs } = req.body;
//   try {
//     const myBlog = new Blog({ blogs });
//     await Blog.create(myBlog);
//     res.send(myBlog);
//   } catch (err) {
//     res.send({ message: err });
//   }
// });

app.post("/addblogs", function (req, res) {
  console.log("adding blog", req.body);
  let blogDb = db.collection("blogs");
  blogDb.insert(req.body);
  res.send("success");
});
app.post("/addcomment", function (req, res) {
  console.log("adding comment", req.body);
  let commentDb = db.collection("comments");
  commentDb.insert(req.body);
  res.send("success");
});
// app.post("/addcomment", async (req, res) => {
//   const { comment } = req.body;
//   try {
//     const mycom = new Comments({ comment });
//     await Comments.create(mycom);
//     res.send(mycom);
//   } catch (err) {
//     res.send({ message: err });
//   }
// });

//team 7 end
app.listen(PORT, function (err, res) {
  if (err) throw err;
  console.log(
    `Application is started successfully and running on : ${PORT}...`
  );
});
