const mongoose = require("mongoose");
const Comments = new mongoose.Schema({



    comment: {
        name: { type: String,required:true},
        email: { type: String,required:true},
        blog_id:{type:Number,required:true},
        comment:{type:String ,required:true},
        date: { type: Date, default:Date.now},
    }
}


);
module.exports = mongoose.model("comments",Comments);