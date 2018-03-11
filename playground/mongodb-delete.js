// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

db.collection('users').deleteMany({email:"kartikeytiwari79.kt@gmail.com"}).then((res) => {
  console.log(res);
});
// db.collection('Todos').deleteOne({completed:false}).then((res) => {
//  console.log(res);
//  });
// db.collection('Todos').findOneAndDelete({_id:new ObjectID('5a8081a5869373948d6c5d38')}).then((res) => {
//  console.log(res);
//  });

//db.close();
})
