var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Game = require('./pacman');

var game = new Game();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket) {

  console.log("someone joined");

  socket.on('start', function() {
    console.log("Game started");
    game.init(io)
  });

  socket.on('keypress', function(key) {
    game.keypress(key);
  });


});

server.listen(8080, function() {
  console.log("Server listening on port 8080");
});

