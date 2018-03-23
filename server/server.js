const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');


var {Todo} = require('./models/todo');

var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

app.get('/todos/:id',(req,res)=>{
    res.send(req.params);
});



//POST USERS

app.post('/users',(req,res)=>{
  var body = _.pick(req.body,['email','password']);
  var user =  new User(body);


  user.save().then(()=>{
    return user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  })

});


// PRIVATE ROUTES


app.get('/users/me',authenticate,(req,res)=>{

res.send(req.user);
});

//POST /USERS/login {email,password}
app.post('/users/login',(req,res) => {
    var body = _.pick(req.body,['email','password']);
    User.findByCredentials(body.email , body.password).then((user)=>{
          user.generateAuthToken().then((token)=>{
                res.header('x-auth',token).send(user);

          });
    }).catch((e)=> {
        res.status(400).send();
    });
});

app.delete('/users/me/token',authenticate, (req, res)=> {

    req.user.removeToken(req.token).then(()=> {
      res.status(200).send();
    },()=>{
      res.status(400).send();
    });

});

app.listen(3000,()=>{
  console.log('started on 3000');
});

module.exports = {app};
