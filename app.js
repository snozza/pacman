var util = require('util');
var _ = require('underscore');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Game = require('./lib/game');
var Pacman = require('./lib/pacman');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

function Server() {
  this.games = {};
  this.waitingRoom = [];
}

Server.prototype.init = function() {
  this.setEventHandlers();
  server.listen(8080, function() {
    console.log("Server listening on port 8080");
  });
}

Server.prototype.setEventHandlers = function() {
  _this = this
  io.on("connection", function(socket) {
    return _this.onSocketConnection(socket, _this);
  });
};

Server.prototype.onSocketConnection = function(socket, _this) {
  util.log("New player connected" + socket.id);
  socket.on('start', function() { return _this.onNewPlayer(this, _this)});  
  socket.on("disconnect", function() {return _this.onClientDisconnect(this, _this)});
}

Server.prototype.onClientDisconnect = function(socket, _this) {
  util.log("Player has disconnected: " + socket.id);
  _this.waitingRoom.splice(_this.waitingRoom.indexOf(socket.id), 1);
  if (typeof _this.games[socket.id].sockets !== 'undefined') {
    _(_this.games[socket.id].sockets).each(function(socket) {
      socket.emit('opponent:disconnect');
      socket.disconnect();
      delete _this.games[socket.id];
    });
  }
}

Server.prototype.onNewPlayer = function(socket, _this) {
  _this.waitingRoom.push(socket);
  if (_this.waitingRoom.length > 1) return _this.startGame(socket);
  socket.emit('waiting');
  return _this.games[socket.id] = new Game();
}

Server.prototype.startGame = function(socket) {
  this.games[socket.id] = this.games[this.waitingRoom[0].id];
  this.addPlayers(this.games[socket.id]);
}

Server.prototype.addPlayers = function(game) {
  for (var i = 0; i < this.waitingRoom.length; i++) {
   game.newPlayer(this.waitingRoom[i]);
  }
  this.waitingRoom = [];
  return game.init();
}

new Server().init();

