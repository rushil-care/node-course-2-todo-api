// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
    var db = client.db('TodoApp');
  if(err){
  return  console.log('unable to connect mongodb server');
  }
  console.log('connected to mongodb server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa4b8cd03d0870d3b8764da')
  },{
    $set: {
      name : 'Rushil Gupta'
    },
    $inc:{ age: 1}
  },
  {
    returnOriginal :false
  }).then((result)=>{
    console.log(result);
  });






  // client.close();

});
