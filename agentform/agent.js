const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Agent = require("./agentschema.js");
const agentAPI = express();
agentAPI.use(express.json());
// console.log("agent");
agentAPI.post(
  "/add-agent",
  expressAsyncHandler(async (req, res) => {
    let agent = req.body;
    // console.log(agent);
    let agentData = await Agent.findOne({ email: agent.email });
    if (agentData != null) {
      res.status(200).send({ message: "Agent already exists!" });
    } else {
      let createdAgent = new Agent({ ...agent });
      let agentPayload = await createdAgent.save();
      res.status(200).send({
        message: "Agent created successfully!!",
        payload: agentPayload,
      });
    }
  })
);
agentAPI.use((err, req, res, next) => {
  res.send({ message: err.message });
});
module.exports = agentAPI;

// agent.post("/agent/add-agent", function (req, res) {
//   let agent = req.body;
//   let agentsDb = db.collection("agents");
//   userDb.findOne({ email: agent.email }, function (err, result) {
//     if (err) console.log(err);
//     if (result == null) {
//       agentsDb.insert(req.body);
//       res.status(200).send("success");
//     } else res.send("The agent with this email is already registered");
//   });
// });
