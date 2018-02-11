// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   text:'something to do',
  //   completed:false
  // }).toArray().then((docs) => {
  // console.log('Todes');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //     return console.log('unable to fetch todo',err);
  //   })
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a7dff63c719724a50767801')
  // }).toArray().then((docs) => {
  // console.log('Todes');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //     return console.log('unable to fetch todo',err);
  //   })
  db.collection('Users').find({
    name: 'kartikeya tiwari'
  }).count().then((docs) => {
  console.log('Todes');
    console.log(`count: ${docs}`);
  },(err) => {
      return console.log('unable to fetch todo',err);
    })


db.close();
})
