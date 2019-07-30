
const path = require('path')
const hbs = require('hbs')
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bookRouter = require('./routers/book')
const transactionRouter = require('./routers/transaction')
const categoryRouter = require('./routers/category')
const session = require('express-session')
const app = express()



const port = process.env.PORT | 3000

//define paths for express config
const publicDirPath = path.join(__dirname,'../public')
const viewdir = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebar engines and views location
app.set('view engine','hbs')
app.set('views',viewdir)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirPath))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(bookRouter)
app.use(categoryRouter)
app.use(transactionRouter)

app.use(session({
    name:'sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        sameSite:true
    }
    
    
  }))


app.get('',(req,res)=>{
    res.render('index',{})
})

app.get('/register',(req,res)=>{
    res.render('register',{})
})

app.get('/login',(req,res)=>{
    
    res.render('login',{})
})
app.post('/adminlogin',(req,res)=>{
    req.session.name = user.name
    console.log(req.session.name)
})
app.get('/adminlogin',(req,res)=>{
    res.render('adminlogin',{})
})


module.exports = app

