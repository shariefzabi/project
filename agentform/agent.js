const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const agentAPI = express();
agentAPI.use(express.json());
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
// console.log("agent");
agentAPI.post(
  "/add-agents",
  expressAsyncHandler(async (req, res) => {
    // let Agent = db.collection("agents");
    let agent = req.body;
    // console.log(agent);
    let agentDb = db.collection("agents");
    let agentData = await agentDb.findOne({ email: agent.email });
    if (agentData != null) {
      res.status(200).send({ message: "Agent already exists!" });
    } else {
      agentDb.insertOne(req.body);
      res.status(200).send("success");
    }
  })
);
// agentAPI.post("/add-agents", function (req, res) {
//   let agents = req.body;
//   console.log(agents);
//   let agentsDb = db.collection("agents");
//   console.log(agentsDb);
//   agentsDb.findOne({ email: agentsDb.email }, function (err, result) {
//     if (result != null) {
//       res.send("The agent with this email is already registered");
//     } else {
//       agentsDb.insertOne(req.body);
//       res.status(200).send("success");
//       console.log(result);
//     }
//   });

//     if (err) console.log(err);
//     if (result == null) {
//       agentsDb.insertOne(req.body);
//       res.status(200).send("success");
//       console.log(result);
//     } else res.send("The agent with this email is already registered");
//   });
// });
agentAPI.use((err, req, res, next) => {
  res.send({ message: err.message });
});
module.exports = agentAPI;
