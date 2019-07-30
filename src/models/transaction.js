const mongoose = require('mongoose')
const validator = require('validator')

const transactionSchema = new mongoose.Schema({
    book_id:{
        type:String,
        required:true,
        trim:true
    },
    book_name:{
        type:String,
        required:true,
        trim:true
    },
    borrowed_time:{
        type:Date,
        // default:Date.now
        default:()=> Date.now()
    },
    return_time:{
        type:Date,
        default:()=>Date.now()+1000
    },
    user_name:{
        type:String,
        required:true,
        
    },
},{
    timestamps:true
})



const Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction