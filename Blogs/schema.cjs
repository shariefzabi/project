const mongoose = require("mongoose");
const Blogs = new mongoose.Schema({

        title: { type: String,required:true},
        about: { type: String,required:true},
        id:{type:Number,required:true},
        date: { type: Date, default:Date.now},
}


);
module.exports = mongoose.model("blogs",Blogs);




// case 'setCurrentBlog':
//     return {...state, currentBlog: action.payload};