const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('unable to find the object');
    }

    const db=client.db('TodoApp');

    db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log(err)
    })

    db.collection('Todos').find().count().then((count)=>{
        console.log(`todos count: ${count}`)
    },(err)=>{
        console.log(err)
    })
})