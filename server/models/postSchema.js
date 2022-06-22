const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true,
    },
    dateCreated:{
        type:Date,
        default: new Date()
    },
    imageSource:{
        type:String,
        default: 'https://random.imagecdn.app/1280/720'
    }



})
const postModel = mongoose.model('Posts',postSchema);
module.exports = postModel;