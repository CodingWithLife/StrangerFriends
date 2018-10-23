var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'pancho',
  password : 'password',
  database : 'strangerFriend'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM users', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var chatRoom = function(callback) {
  connection.query('SELECT * FROM chatRoom', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertChat = function(description,description2, cb) {
 connection.query('INSERT INTO chatRoom (description, description2) VALUES (?, ?)',
   [description, description2], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};

module.exports.insertChat = insertChat;
module.exports.selectAll = selectAll;
module.exports.chatRoom = chatRoom;
