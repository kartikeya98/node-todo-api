var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://kartikeya9_8:z-star@kt@ds027335.mlab.com:27335/node-todo-98'
};
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);



module.exports = {
  mongoose
}
