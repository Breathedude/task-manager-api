const express = require('express')
const Book = require('../models/book')
const multer = require('multer')
const auth = require('../middleware/auth.js')
const Category = require('../models/category')
const bodyParser = require('body-parser')


const urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json())
const router = new express.Router


router.get('/books',async(req,res)=>{
    Book.find({status:1}).then((book)=>{
        if(req.session.name){
            console.log(req.session)
            res.render('books',{book})
        }
        
    }).catch((e)=>{
        res.status(500).send()
    })
})
    
router.get('/addbook',async(req,res)=>{
    const book = null
    Category.find({}).then((category)=>{
        if(req.session.name){
            res.render('addbook',{category,book})
        }

        
    }).catch((e)=>{
        res.status(500).send()
    })
    
})



router.get('/editbook/:id',async(req,res)=>{
    Category.find({}).then((category)=>{
        Book.findOne({_id:req.params.id}).then((book)=>{
            

            res.render('addbook',{category,book})
        })
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.post('/addbooks', urlencodedParser,async (req, res) => {
    const book = new Book(req.body)
    //const book = await Book.findByIdAndRemove(req.body.id)
    const b = Book.find({book_name:req.body.book_name})
    if(b){
        await Book.deleteOne({book_name:req.body.book_name})
    }
    try {
        await book.save()
        res.send("Book added successfully!!")
    } catch (e) {
        res.status(400).send(e)
    }
})


// router.get('/deletebook/:id',async(req,res)=>{
//     try{
//         const book = await Book.findByIdAndRemove(req.params.id)
//         console.log(book.book_name)
//     if(!book){
//         return res.status(404).send()
//     }
//     res.send("Deleted book")
//     }catch(e){
//         res.status(400).send()
//     }
// })

router.get('/deletebook/:id',async(req,res)=>{
    try{
        const book = await Book.findOne({_id:req.params.id})
        console.log(book.book_name)
    if(!book){
        return res.status(404).send()
    }
   book.status = 2
    await book.save()
    res.send("Deleted book")
    }catch(e){
        res.status(400).send()
    }
})

module.exports = router
