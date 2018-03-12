// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
    var db = client.db('TodoApp');
  if(err){
  return  console.log('unable to connect mongodb server');
  }
  console.log('connected to mongodb server');
  //deleteMany
  // db.collection('Todoss').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });


  // deleteOne

  // db.collection('Todoss').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });


  // findOneanddelete
  db.collection('Todoss').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
  });


  // client.close();

});
