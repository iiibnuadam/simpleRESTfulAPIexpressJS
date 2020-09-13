'use strict';

const response = require('./res');
const connection = require('./conn');

exports.findUser = function(req, res) {
  const userId = req.params.userId;

  connection.query('SELECT * FROM person where id = ?',
  [ userId ],
  function(error, rows, fields) {
    if(error) {
      console.log(error)
    } else {
      response.ok(rows,res)
    }
  })
}
exports.createUser = function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  connection.query('INSERT INTO person (first_name, last_name) values (?,?)',[ firstName, lastName ],
  function(error, rows, fields) {
    if(error) {
      console.log(error);
    } else {
      response.ok("Berhasil Memasukan Data Baru !", res);
    }
  })
}
exports.updateUser = function(req, res) {
  const userId = req.body.userId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  connection.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?', 
  [ firstName, lastName, userId ],
  function(error, rows, fields) {
    if(error) {
      console.log(error);
    } else {
      response.ok("Update data berhasil !", res)
    }
  });
}
exports.deleteUser = function(req, res) {
  const userId = req.body.userId;

  connection.query('DELETE FROM person WHERE id = ?', [ userId ],
  function(error, rows, field) {
    if(error){
      console.log(error)
    } else {
      response.ok("Delete user berhasil !", res)
    }
   });
}
exports.users = function(req, res) {
  connection.query('SELECT * FROM person', function(error, rows, fields) {
    if(error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
exports.index = function(req, res) {
  response.ok("Hello from the Node JS RESTful side!", res)
};