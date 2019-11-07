// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

const obj= new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to connect to servers');
    }

    console.log('connected to mongodb server');
    const db = client.db('TodoApp')


    // db.collection('Todos').insertOne({
    //     text:'something todo',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert to database ')
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // db.collection('Users').insertOne({
    //     name:'shrabanti',
    //     age:21,
    //     location:'india'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert one')
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    client.close();
});