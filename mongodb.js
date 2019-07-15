const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionUrl, {useNewUrlParser:true }, (error,client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }
    console.log("Connected")
    const db = client.db(databaseName)

})

//     db.collection('users').insertOne({
//         name:'n6',
//         age:20,
       
//     },(error,result)=>{
//         if(error){
//             return console.log("Unable to insert user")
//         }
//         console.log(result.ops)

//     })

    // db.collection('users').insertMany([
    //     {
    //         name:'akki',
    //         age:21

    // },
    // {
    //         name:'n3',
    //         age:20
    // }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'task1',
    //         completed:true
    //     },
    //     {
    //         description:'task2',
    //         completed:false
    //     },
    //     {
    //         description:'task3',
    //         completed:true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("Error in inserting user")
    //     }
    //     console.log(result.ops)
    // })
   
   
    // db.collection('users').findOne({_id:new ObjectID('5d2587f9fe90521e7fde6265')},(error,user)=>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(user)

    // })

    // db.collection('users').find({age:20}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:20}).count((error,count)=>{
    //     console.log(count)
    // })


    // db.collection('tasks').findOne({_id:new ObjectID('5d2594ac3cc076251a1e5f9b')},(error,user)=>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(user)

    // })
    
    // db.collection('tasks').find({completed:false}).toArray((error,users)=>{
    //     console.log(users)
    // })


    // const updatePromise =  db.collection('users').updateOne({_id:new ObjectID('5d25900f619ed822f39727f0')},
    //     {
    //         // $set:{
    //         //     name:'n5'
    //         // }
    //         $inc:{
    //             age:1
    //         }
    //     })
    //     updatePromise.then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)

    //     })
    // })

    // const updatePromise =  db.collection('tasks').updateMany({completed:false},
    //     {
    //         $set:{
    //             completed:true
    //         }
            
    //     })
    //     updatePromise.then((result)=>{
    //         console.log(result.modifiedCount)
    //     }).catch((error)=>{
    //         console.log(error)

    //     })


    //  db.collection('users').deleteOne({_id:new ObjectID('5d2587f9fe90521e7fde6265')},(error,user)=>{
    //         if(error){
    //             return console.log("Unable to fetch")
    //         }
    //         console.log(user)
    
    //     }) 
    
    //     db.collection('users').deleteMany({age:21}).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
   
    
    


