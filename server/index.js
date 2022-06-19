const express = require('express');


const server = express()


server.get('/',(req,res)=>{
    res.send('Server ');
})
server.listen(3000,()=>{
    console.log('I dont wanna do this')
})