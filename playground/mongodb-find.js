// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
    var db = client.db('TodoApp');
  if(err){
  return  console.log('unable to connect mongodb server');
  }
  console.log('connected to mongodb server');
   // db.collection('Todoss').find(
   //   {_id: new ObjectID('5aa4bce58d24f9fe546b4bc6')
   //    }).toArray().then((docs)=>{
   //   console.log('Todoss');
   //   console.log(JSON.stringify(docs,undefined,2));
   // },(err)=>{
   //   console.log('unable to connect Todosss');
   // });

   // db.collection('Todoss').find().count().then((count)=>{
   //   console.log(`Todoss count : ${count}`);
   // },(err)=>{
   //   console.log('unable to connect Todosss');
   // });

   db.collection('Users').find({name:'Rushil'}).toArray().then((docs)=>{
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
     console.log('unable to find quwry');
   })
  // client.close();

});
