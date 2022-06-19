const express = require('express');
const mongoose = require('mongoose');
const CONNECTION_URL  ='mongodb+srv://adi:sahara123@cluster0.drtgg.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT ||5000
const server = express()

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