var util = require('util');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Game = require('./lib/game');
var Pacman = require('./lib/pacman');

var game = new Game()

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

function Server() {
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
  io.on("connection", _this.onSocketConnection);
};

Server.prototype.onSocketConnection = function(socket) {
  util.log("New player connected" + socket.id)
  if (game.totalPlayers === 4) { 
    socket.disconnect()
  } 
    socket.on('start', onNewPlayer)
    socket.on("disconnect", onClientDisconnect);
}

Server.prototype.onClientDisconnect = function() {
  util.log("Player has disconnected: " + this.id)
}

Server.prototype.onNewPlayer = function() {
  game.newPlayer(this);
}

Server.prototype.startGame = function() {
  new Game().init();
}

new Server().init();

