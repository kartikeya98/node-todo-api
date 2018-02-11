// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Todos').insertOne({
    text:'something to do',
    completed:false
  },(err,results) => {
    if(err) {
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(results.ops,undefined,2));
  })

  db.collection('Users').insertOne({
    _id:123,
    Name:'kartikeya tiwari',
    age: 19,
    location: 'jaipur'
  },(err,results) => {
    if(err) {
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(results.ops,undefined,2));
  })

db.close();
})
