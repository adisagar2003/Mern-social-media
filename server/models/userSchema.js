const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
        required: true
    },
    lastSeen:{
        type:Date,
        default: new Date(),
        required: true
    },

    likeCount:{
        type:Number,
        default:0,
        required: true
    }
    
,
    credential:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true,
        

    }

})

const userModel = mongoose.model('User',userSchema);
module.exports =  userModel;