'use strict';
module.exports = function(app) {
  const todoList = require('./controller');

  app.route('/')
    .get(todoList.index);

  app.route('/users')
    .get(todoList.users);

  app.route('/users/:userId')
    .get(todoList.findUser);

  app.route('/users')
    .post(todoList.createUser);
  
  app.route('/users')
    .put(todoList.updateUser);

  app.route('/users')
    .delete(todoList.deleteUser);
};