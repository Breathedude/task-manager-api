const express = require('express')
const User = require('../models/user')

const auth = require('../middleware/auth.js')
const session = require('express-session')
const bodyParser = require('body-parser')
const sess = require('../middleware/sess')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json())
const router = new express.Router


router.use(session({
    name:'sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        sameSite:true
    }
    
    
  }))

router.get('/trial',auth,async(req,res)=>{
    console.log("Trial")
})


router.post('/register',urlencodedParser, async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        //sendEmail(user.email,user.name)
        const token = await user.generateAuthToken()
        //res.status(201).send({user,token})
        res.send("Registered successfully!!")
    } catch (e) {
        res.status(400).send(e)
    }
})
router.post('/login',urlencodedParser,async(req,res)=>{
    //const user = new User(req.body)
    try{
        const user = await User.findByCredentials(req.body.name,req.body.password)
        const token = await user.generateAuthToken()
        req.session.name = user.name
        console.log(req.session.name)
    console.log(user.name)
        

        // console.log(req.session.name)
        
        res.render('books')
        
    //    res.headers.authorization = token   
    }catch(e){
      res.status(400).send(e)
    }  
})

router.post('/userlogin',urlencodedParser,async(req,res)=>{
    //const user = new User(req.body)
    try{
        const user = await User.findByCredentials(req.body.name,req.body.password)
        req.session.name = user.name
        console.log(req.session)
       // const token = await user.generateAuthToken()
        //res.send({user,token})
        res.render('userbook',{})
    }catch(e){
        res.status(400).send(e)
    }
   
})

router.post('/users/logout',auth,async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.post('/users/logoutAll',auth,async(req,res)=>{
    
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
    
})

router.get('/users/me',auth,async(req,res)=>{
    res.send(req.user)
})

router.patch('/users/me',auth,async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','password','age']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(404).send()
    }
    try{
        //const user = await User(findById(req.params.id))
        updates.forEach((update)=>{
            req.user(update) = req.body(update)

        })
        await req.user.save()
        
        //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new :true,runValidators:true})
        // if(!user){
        //     res.status(404).send()
        // }
        res.send(req.user)
    }catch(e){
        res.status(400).send()
    }
}) 

router.delete('/users/me',auth,async(req,res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.user._id)
        // if(!user){
        //     return res.status(404).send()
    // }
   
    await req.user.remove()
    //exitEmail(req.user.email,req.user.name)
    res.send(req.user)
    }catch(e){
        res.status(500).send()

    }
})





module.exports = router
