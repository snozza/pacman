var _ = require("underscore")
var PacMan = require('./pacman-server');

function Game(gameID) {
  this.players = {};
  this.sockets = {};
  this.totalPlayers = 0;
  this.sprite;
  this.socket;
  this.score = 0;
  this.width = 500;
  this.height = 500;
  this.GameId = gameID
}

Game.prototype.newPlayer = function(socket) {
  var _this = this;
  this.totalPLayers++;
  this.players[socket.id] = new PacMan()
  this.sockets[socket.id] = socket;
  this.players[socket.id].id = socket.id;
  _(this.sockets).each(function (socket) { _this.gameDetails(socket); });
  this.listenOnKeys(socket);
  this.init()
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


Game.prototype.createSprite = function() {
  this.sprite = {
    size: 20,
    x: Math.round(Math.random() * (this.width - 20) / 20), 
    y: Math.round(Math.random() * (this.height - 20) / 20),
  };
}




// Game.prototype.isSpriteEaten = function(pacman, sprite) {
//   if ((.pacman.x - pacman.clearance) <= (sprite.x * 20) && (sprite.x * 20) <= (pacman.x + pacman.clearance)) {
//     if((pacman.y - pacman.clearance) <= (sprite.y * 20) && (sprite.y * 20) <= (pacman.y + pacman.clearance)) {   
//       this.score++;
//       this.createSprite();
//     }
//   }
// }

// Game.prototype.checkScore = function () {
//   if (this.score === 5) {
//     this.score = 0;
//     this.io.sockets.emit('game:over');
//   }
// }

Game.prototype.init = function() {
  {  
    this.animate();
  }
}


Game.prototype.animate = function() {
  var _this = this
  setInterval(function() {
    _this.movement()
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
  var gameStatus = playersStatus;
  _(this.sockets).each(function (socket) {
    socket.emit('update', gameStatus);
  });
}

Game.prototype.gatherPlayerStatus = function() {
  var playerStatus = {};
  _(this.players).each(function(player) {
    playerStatus[player.id] = _(player).pick('id', 'x', 'y', 'direction',
      'mouthOpenValue', 'mouthPosition')
  });

  return playerStatus;
};




module.exports = Game;
