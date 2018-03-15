const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5aa5047e629a470ae1c91853";

// if(!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('todos',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('todos',todo);
// }).catch((e) => console.log(e));

const {User} = require('./../server/models/user')

User.findById(id).then((doc)=>{
  console.log(doc);
});
