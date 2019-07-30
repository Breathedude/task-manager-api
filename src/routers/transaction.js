const express = require('express')
const Transaction = require('../models/transaction')
const bodyParser = require('body-parser')
const Book = require('../models/book')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json())
const router = new express.Router

router.get('/userbook',async(req,res)=>{
    
    Book.find({}).then((book)=>{
       
        res.render('userbook',{book})
        
    }).catch((e)=>{
        res.status(500).send()
    })
})
    
router.get('/transaction',async(req,res)=>{
    Transaction.find({}).then((transaction)=>{
            res.render('transaction',{transaction})
        
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.get('/usertransaction',async(req,res)=>{
    Transaction.find({user_name:req.session.name}).then((transaction)=>{
        res.render('usertransaction',{transaction})
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.get('/addtransaction/:id',async(req,res)=>{
    console.log(req.session)
    const person = req.session.name
    Book.findOne({_id:req.params.id}).then((book)=>{
        res.render('addtransaction',{book,person})
    }).catch((e)=>{
        res.status(500).send()
    })

})

router.post('/addtransaction',urlencodedParser,async(req,res)=>{
    const transaction = new Transaction(req.body)
    try{
        await transaction.save()
        res.send("Book Borrowed")
    }catch(e){
        res.status(400).send(e)
    }
})
   
// router.post('/addtransaction/book_id/book_name', urlencodedParser,async (req, res) => {
//     console.log("Hello")
//     const transaction = new Transaction({
//         ...req.body,
//        owner:req.user_id
//     })
    
//     try {
//         await transaction.save()
//         res.send("Borrowed book")
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })




// router.get('/deletetransaction/:id',async(req,res)=>{
//     try{
//         //const transaction = await Transaction.findByIdAndRemove(req.params.id)
//         Book.findById
//     if(!transaction){
//         return res.status(404).send()
//     }
//     res.send(transaction)
//     }catch(e){
//         res.status(400).send()
//     }
// })


router.get('/deletetransaction/:id',async(req,res)=>{
    try{
        const transaction = await Transaction.findByIdAndRemove(req.params.id)
    
    if(!transaction){
        return res.status(404).send()
    }
    res.send("Returned book")
    }catch(e){
        res.status(400).send()
    }
})



module.exports = router
