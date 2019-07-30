const User = require('../models/user')
const session = require('express-session')
var express = require('express')




const setSession = (name)=>{
    express.session({
        cookie:{
            sameSite:true
        },
        secret:'secret',
        name:name,
        resave:false,
        saveUninitialized:false
    })
    
}




module.exports = setSession