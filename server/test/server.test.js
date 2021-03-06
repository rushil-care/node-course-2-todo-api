const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');

const{Todo} = require('./../models/todo');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
});

describe('Post /todos',()=>{
   it('should create a new to do',(done)=>{
     var text = 'test to do test';
     request(app)
       .post('/todos')
       .send({text})
       .expect(200)
       .expect((res)=>{
         expect(res.body.text).toBe(text);
       })
       .end((err,res)=>{
         if(err){
           return done(err);
         }
         Todo.find().then((todos)=>{
           expect(todos.length).toBe(1);
           expect(todos[0].text).toBe(text);
           done();
         }).catch((e) => done(e));
       });
   });
});
