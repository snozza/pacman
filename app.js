var util = require('util');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Game = require('./lib/Game-server');
var Pacman = require('./lib/pacman-server');

var socket;
var players;

var game = new Game();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

function init() {
  players = [];

  setEventHandlers();

  server.listen(8080, function() {
    console.log("Server listening on port 8080");
  });
}

var setEventHandlers = function() {
  io.on("connection", onSocketConnection);
};

function onSocketConnection(client) {
  util.log("New player connected" + client.id)

  client.on('new:player', onNewPlayer);
  
  client.on('start', function() {
      console.log("Game started");
      game.init(io)
    });

  client.on('keypress', function(key) {
    this.pacman.changeDirection(key);
  });

  client.on("disconnect", onClientDisconnect);
}

function onClientDisconnect() {
  util.log("Player has disconnected: " + this.id)
}

function onNewPlayer() {
  var existingPacman;
  var newPacman = new Pacman()
  newPacman.id = this.id;
  this.broadcast.emit("new pacman", {newPacman:});

  for (var i = 0; i < players.length; i++) {
    existingPacman = players[i];
    this.emit("new pacman", {id: existingPacman})
  }

  players.push(newPacman);
}


init();

