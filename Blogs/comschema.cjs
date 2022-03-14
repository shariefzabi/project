const mongoose = require("mongoose");
const Comments = new mongoose.Schema({



   
        name: { type: String,required:true},
        email: { type: String,required:true},
        id:{type:Number,required:true},
        //  date: { type: Date, default:Date.now},
       comments:{type:String,required:true},
}


);
module.exports = mongoose.model("comments",Comments);