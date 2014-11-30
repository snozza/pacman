var _ = require("underscore")
var PacMan = require('./pacman');
var Ghost = require('./ghost');

function Game(gameID) {
  this.players = {};
  this.sockets = {};
  this.totalPlayers = 0;
  this.sprite;
  this.socket;
  this.score = 0;
  this.width = 900;
  this.height = 900;
  this.GameId = gameID
  this.dots = [];
  this.eatenDots = [];
  this.ghost;
}

Game.prototype.newPlayer = function(socket) {
  var _this = this;
  this.totalPlayers++;
  this.players[socket.id] = new PacMan()
  this.players[socket.id].game = this;
  this.sockets[socket.id] = socket;
  this.players[socket.id].id = socket.id;
  _(this.sockets).each(function (socket) { _this.gameDetails(socket); });
  this.listenOnKeys(socket);
};

Game.prototype.gameDetails = function(socket) {
  var playerIDs = this.gatherPlayerIDs();
  socket.emit("gameDetails", {IDs: playerIDs})
}

Game.prototype.gatherPlayerIDs = function() {
  playerIDs = [];
  _(this.players).each(function (player) {
    playerIDs.push(player.id);
  });
  return playerIDs;
}

Game.prototype.listenOnKeys = function(socket) {
  var _this = this;
  socket.on('keypress', function(data) {
    _this.players[data.socket_id].changeDirection(data.keypress);
  });
};


Game.prototype.generateDots = function() {
  var lineCount = this.width / 30;
  for (var i = 1; i <= lineCount; i++) {
    for (var j = 1; j <= lineCount; j++) {
      this.dots.push({
        x: (i + 0.5) * lineCount,
        y: (j + 0.5) * lineCount
      });
    }
  }
}

Game.prototype.init = function() {
  var _this = this
  this.generateDots();
  this.ghost = new Ghost();
  setInterval(function() {
    _this.movement();
    _this.updateAll();
  }, 60)
};

Game.prototype.movement = function() {
  _(this.players).each(function(player) {
    player.pacmanBite(); 
    player.pacmanMove(); });
};

Game.prototype.updateAll = function() {
  var playersStatus = this.gatherPlayerStatus();
  var ghostStatus = this.ghost;
  var mazeStatus = this.gatherMazeStatus();
  var gameStatus = {players: playersStatus, maze: mazeStatus, ghost: ghostStatus}
  _(this.sockets).each(function (socket) {
    socket.emit('update', gameStatus);
  });
}

Game.prototype.gatherMazeStatus = function() {
  return this.dots;
}

Game.prototype.gatherPlayerStatus = function() {
  var playerStatus = {};
  _(this.players).each(function(player) {
    playerStatus[player.id] = _(player).pick('id', 'x', 'y', 'direction',
      'mouthOpenValue', 'mouthPosition', 'score')
  });

  return playerStatus;
};




module.exports = Game;