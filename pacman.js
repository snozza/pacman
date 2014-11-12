function Game() {
  this.pacman;
  this.sprite;
  this.socket;
  this.width = 500;
  this.height = 500;
}

Game.prototype.createSprite = function() {
  this.sprite = {
    size: 20,
    x: Math.round(Math.random() * (this.width - 20) / 20), 
    y: Math.round(Math.random() * (this.height - 20) / 20),
  };
}

Game.prototype.createPacman = function() {
  this.pacman = {
    x: 5,
    y: 20,
    radius: 10,
    clearance: 20,
    speed: 10,
    mouthOpenValue: 40,
    mouthPosition: -1,
    direction: 'right'
  }
}
Game.prototype.init = function(socket) {
  {
    this.socket = socket;
    this.createPacman();
    this.createSprite();   
    this.animate();
  }
}

Game.prototype.animate = function() {
  var _this = this
  setInterval(function() {
    _this.socket.broadcast.emit('render', _this.pacman, _this.sprite);
  });
};

Game.prototype.keypress = function() {
  if(key == "37") this.direction = "left";
    else if(key == "38") this.pacman.direction = "up";
    else if(key == "39") this.pacman.direction = "right";
    else if(key == "40") this.pacman.direction = "down";
}


module.exports = Game;
