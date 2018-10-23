const dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var bodyParser = require('body-parser');
var app = require('http').createServer();
var io = module.exports.io = require('socket.io')(app);
var database = require('../database-mysql/index.js');

const SocketManager = require('./SocketManager')
io.on('connection', SocketManager)

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.get('/', function (req, res) {
  console.log("You are in root")
});

app.get('/users', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/chats', function (req, res) {
  items.chatRoom(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
