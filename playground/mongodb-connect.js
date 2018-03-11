// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
    var db = client.db('TodoApp');
  if(err){
  return  console.log('unable to connect mongodb server');
  }
  console.log('connected to mongodb server');
  // db.collection('Todoss').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('unable to insert in database');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //
  //   name:'Rushil',
  //   age:18,
  //   location:'srm'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('unable to insert database');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();

});
