const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    topic: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    date: {
        type: String
    },
    about:{
        type: String
    },
    id:{
        type:String
    }
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;