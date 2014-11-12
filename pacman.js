function Game = {
  this.pacman;
  this.sprite;
  this.direction;
}

Game.prototype.createSprite = function() {
  this.sprite = {
    size: 20,
    x: Math.round(Math.random() * (width - 20) / 20), 
    y: Math.round(Math.random() * (height - 20) / 20),
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
    mouthPosition: -1
  }
}
Game.prototype.init = function() {
  { 
    this.createPacman();
    this.createSprite();
    this.direction = "right"; //default    
  }
}

Game.prototype.animate = function() {
  setInterval(function() {
    io.sockets.emit('render', this.pacman, this.sprite, this.direction);
  });
};

module.exports = Game;
