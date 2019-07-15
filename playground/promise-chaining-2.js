require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5d26dc144d756a1c0d40b815').then((t)=>{
//     console.log(t)
//     return Task.countDocuments({completed:false})
// }).then((result)=>
//     console.log(result) 
//     ).catch((e)=>console.log(e))




const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5d26dcec4d756a1c0d40b816').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})