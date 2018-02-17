require('./config/config.js')
var express = require('express');
const _ = require('lodash');
var {ObjectID} =require('mongodb');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('.//models/user');

var Port = process.env.PORT;
var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var todo = new Todo ({
    text:req.body.text
  });
todo.save().then((doc) => {
  res.send(doc)
},(e) => {
  res.status(400).send(e)
});
});
app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  })
},(e) => {
  res.status(400).send('unable to get the todos',e)
})

app.get('/todos/:id',(req,res) => {
var id = req.params.id;
 if (!ObjectID.isValid(id)) {
  return  res.status(404).send('id is not valid');

  }
  else {
    console.log('id is valid')

 }
 Todo.findById(id).then((todo) => {
   if (!todo) {
      return  res.status(404).send();
 }
    res.send({todo});
 }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id',(req,res) => {
  var id =req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send()
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(404).send()
  });
});
app.patch('/todos/:id',(req,res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed===true) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id ,{$set:body},{new:true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});
app.listen(Port,()=> {
  console.log(`the app is running on ${Port}`);
})
module.exports = {app};
