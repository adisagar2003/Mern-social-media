const express = require('express');
const mongoose = require('mongoose');
const CONNECTION_URL  ='mongodb+srv://adi:sahara123@cluster0.drtgg.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT ||5000
const server = express();
const userModel = require('./models/userSchema')
const {OAuth2Client}  = require('google-auth-library');
const client =  new OAuth2Client("236836718639-hol81mpdksfikn4354praeabvvst4tp4.apps.googleusercontent.com")

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
console.log('Database connected, PORT',PORT);
}).catch((err)=>{

})
server.get('/',(req,res)=>{
    res.send('Server ');
})
server.listen(5000,()=>{
    console.log('I dont wanna do this')
})

server.post('/addUserToDataBase',(req,res)=>{
    userModel.create({email:'johnteachescode@gmail.com',firstName:"John",lastName:"Doe",credential:'6969696969699696'}).then(()=>{
        console.log('Well...worked')
    }).catch(()=>{
        console.log('Error detected,code rejected')
    })
    res.send('BC');
})