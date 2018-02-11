// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

// db.collection('Todos').findOneAndUpdate({
//   text:  "something to do"
// },{
//   $set:{
//     completed:false
//   }
// },{
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })
db.collection('Users').findOneAndUpdate({
  name:"mike"
},{
  $set:{
    name:"kartikeya tiwari"
  },$inc:{
    age:1
  }

},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
})
//db.close();
})
