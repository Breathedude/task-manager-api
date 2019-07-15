require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5d26d5a779a6f7190fd89624',{age:20}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:20})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>console.log(e))


const updateAgeandCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5d26d5a779a6f7190fd89624',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})