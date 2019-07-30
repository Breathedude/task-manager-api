const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req,res,next)=>{
    //console.log("Auth middleware")
    try{
       
        //const token = req.headers["x-access-token"] || req.headers["authorization"]
        
       // const token = req.headers.authorization.split(' ')[1]
        console.log("auth")
        
        //const token = req.headers['Authorization']
        const token = req.header('Authorization')
        console.log(token)
        const decoded = jwt.verify(token,'rachitha')
        const user = await User.findOne({_id:decoded._id,'tokens.token':token})
        //console.log(token)

        if(!user){
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    }catch(e){
        res.status(401).send({error:"please authenticate"})
    }
}

module.exports = auth