const mongoose = require("mongoose");
const agentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      minlength: 5,
      required: [true, "Full name is required!"],
    },
    agent: { type: String, required: [true, "Agent is required!"] },
    phone: {
      type: Number,
      pattern: "/^[0-9]{10}$/",
      required: [true, "Phone number is required!"],
    },
    email: {
      type: String,
      // format: "email",
      pattern: "/^[a-zA-Z0-9.]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/",
      required: [true, "Email is required!"],
    },
    contactAddress: {
      type: String,
      required: [true, "Contact address is required!"],
    },
    businessLocation: {
      type: String,
      required: [true, "Business location is required!"],
    },
    townOrCity: { type: String, required: [true, "Town/City is required!"] },
  },
  {
    collection: "agents",
  }
);

const agentModel = mongoose.model("agent", agentSchema);
module.exports = agentModel;
