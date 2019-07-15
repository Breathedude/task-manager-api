const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()



const port = process.env.PORT | 3000

// app.use ((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
   
// })

// app.use((req,res,next)=>{
//     res.status(501).send("Site is down")
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')
// const myFunction = async ()=>{
//     const password = "asdfg1234"
//     const hashedPassword = await bcrypt.hash(password,8 )
//     const isMatch = await bcrypt.compare("asdfg1234",hashedPassword)
//     console.log(password)
//     console.log(hashedPassword)
//     console.log(isMatch)

// }

// myFunction()


// const jwt = require('jsonwebtoken')
// const myFunction = async()=>{
//     const token = jwt.sign({_id:"abc123"},'rachitha')
//     console.log(token)

//     const data = jwt.verify(token,'rachitha')
//     console.log(data)
// }

// myFunction()


// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     filefilter(req,file,cb){

//         if(!file.originalname.endswith('.pdf')){
//             return cb(new Error('Upload a pdf'))
//         }
//         cb(undefined,true)
//         // cb(new Error('Wrong file type'))
//         // cb(undefined,true)
//         // cb(undefined,false)

//     }

// })


// const errorMiddleware = (req,res,next)=>{
//     throw new Error("From middleware")
// }
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })