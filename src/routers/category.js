const express = require('express')
const Category = require('../models/category')
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json())
const router = new express.Router


router.get('/categories',async(req,res)=>{
    Category.find({}).then((category)=>{
        res.render('category',{category})
    }).catch((e)=>{
        res.status(500).send()
    })
})
    
router.get('/addcategory',async(req,res)=>{
    const category = null
    res.render('addcategory',{category})
    
})

router.get('/editcategory/:id',async(req,res)=>{
    Category.findOne({_id:req.params.id}).then((category)=>{
        res.render('addcategory',{category})
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.post('/addcategory', urlencodedParser,async (req, res) => {
    const category = new Category(req.body)
    //const book = await Book.findByIdAndRemove(req.body.id)
    const c = Category.find({category_name:req.body.category_name})
    if(c){
        await Category.deleteOne({category_name:req.body.category_name})
    }
    try {
        await category.save()
        res.send("Category added successfully!!")
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/deletecategory/:id',async(req,res)=>{
    try{
        const category = await Category.findByIdAndRemove(req.params.id)
    
    if(!category){
        return res.status(404).send()
    }
    res.send("Category deleted")
    }catch(e){
        res.status(400).send()
    }
})

module.exports = router
