const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const CONNECTION_URL  ='mongodb+srv://adi:sahara123@cluster0.drtgg.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT ||5000
const server = express();
const cookieParser = require('cookie-parser');

const userModel = require('./models/userSchema')
const {OAuth2Client}  = require('google-auth-library');
const client =  new OAuth2Client("236836718639-hol81mpdksfikn4354praeabvvst4tp4.apps.googleusercontent.com")
var bodyParser = require('body-parser');
const session = require('express-session');
const { collection } = require('./models/userSchema');
const MongoDBSession = require('connect-mongodb-session')(session);

const store = new MongoDBSession({
    uri:CONNECTION_URL,
    collection:"mySession",

})
server.use(session({
    key:"userID",
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    store:store,
    username:'',
    cookie:{
        expires:60*60*3,
    }

    
}))



server.use((req,res,next)=>{
    console.log(req.session);
    next()
})
server.use(bodyParser.json())
server.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
console.log('Database connected, PORT',PORT);
}).catch((err)=>{

})
server.get('/',(req,res)=>{
    req.session.isAuth = true;

    res.json(session);
})
server.listen(5000,()=>{
    console.log('I dont wanna do this')
})
server.use(cookieParser())

const  isAuth =  (req,res,next)=>{
    if (req.session.isAuth){

        next()
    }
    else{
        res.json({no:'no'})
    }
}
server.post('/addUserToDataBase',(req,res)=>{

    userModel.create(req.body).then(()=>{
        console.log('Well...worked')
        res.json(req.body)
    }).catch((err)=>{
        console.log('Error detected,code rejected');
        res.json({
            error:err
        })
    })
  




})
server.post('/checkIfUser',(req,res)=>{
    console.log(req.body.credentail ,'req body')
    userModel.findOne({credential:req.body.credentail}).then((result)=>{
        if (result==null){

            console.log(result,"It was null lol ");
            res.json({
                error:'sad'
            })
        
        }
        else{
            console.log('found the thing',result);
            res.json(result)
        }


    }).catch((err)=>{
        console.log('</3 NOOOOOOOOOO',err)
    })
})

server.post('/signIn',(req,res)=>{
    userModel.findOne({email:req.body.email,password:req.body.password}).then((response)=>{
       console.log(response,'This is my response')
       if (response==null){
        console.log('null....failed login')
        res.json({
            err:'error'
        })
       }
       else{
        req.session.username = response.firstName
req.session.isAuth = true;

console.log(req.session)
console.log(req.session.isAuth)
res.json(response)






       }

    })

})

server.get('/signIn',(req,res)=>{
    if (req.session.firstName){
        res.json({isLoggedIn:true,user:req.session.firstName})
    }
    else{
        res.json({isLoggedIn:false})
    }
})

// User auth client
