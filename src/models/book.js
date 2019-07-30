const mongoose = require('mongoose')
const validator = require('validator')


const taskSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    category_name:{
        type:String,
        required:true,
        trim:true
    },
    total_count:{
        type:Number,
        required:true
    },
    present_count:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        required:true,
        default:1
    }
},{
    timestamps:true
})

const Book = mongoose.model('Book',taskSchema)

module.exports = Book