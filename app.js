var util = require('util');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Game = require('./lib/game');
var Pacman = require('./lib/pacman');

var socket;
var players;

var game = new Game();
game.generateDots();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

function init() {
  setEventHandlers();

  server.listen(8080, function() {
    console.log("Server listening on port 8080");
  });
}

var setEventHandlers = function() {
  io.on("connection", onSocketConnection);
};

function onSocketConnection(socket) {
  util.log("New player connected" + socket.id)

  socket.on('start', onNewPlayer)

  socket.on("disconnect", onClientDisconnect);
}

function onClientDisconnect() {
  util.log("Player has disconnected: " + this.id)
}

function onNewPlayer() {
  game.newPlayer(this);
}


init();

