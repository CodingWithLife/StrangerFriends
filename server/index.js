//const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(3001).sockets;
const dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

// mongo.connect('mongodb://127.0.0.1/mongochat',function(err, db){
//     if(err){
//       throw err;
//     }
//
//     console.log('MongoDB connected....');
//
//
//     client.on('connection',function(){
//       let chat = db.collection('chats');
//
//
//
//       sendStatus = function(s){
//         socket.emit('status',s);
//         }
//
//
//       //chat.find().limit(100).sort({_id:1}).toArray(function());
//
//
//     });
// });



var app = express();

// app.get('/',(req, res) =>{
//   res.send("Hello");
// });

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
