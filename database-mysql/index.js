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

module.exports.selectAll = selectAll;
