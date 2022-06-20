const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true
    },
    lastSeen:{
        type:Date,
        default: new Date()
    },

    likeCount:{
        type:Number,
        default:0
    }
    
,
    credential:{
        type:String,
        unique: true
    }

})

const userModel = mongoose.model('User',userSchema);
module.exports =  userModel;