var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Game = require('./pacman');

game = new Game();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket) {

  socket.on('start', function(msg) {
    game.init()
  });

  socket.on('direction', function(dir) {
    socket.broadcast.emit('direction', {
      direction: dir
    });
  });

  socket.on('createSprite', function() {
    game.createSprite();
  }



});

server.listen(8080, function() {
  console.log("Server listening on port 8080");
});

