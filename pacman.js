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
    speed: 5,
    mouthOpenValue: 40,
    mouthPosition: -1,
    direction: 'right'
  }
}

Game.prototype.pacmanMove = function() { 
  if(this.pacman.direction == "right") this.pacman.x+= this.pacman.speed;
  else if(this.pacman.direction == "left") this.pacman.x-= this.pacman.speed;
  else if(this.pacman.direction == "up") this.pacman.y-= this.pacman.speed;
  else if(this.pacman.direction == "down") this.pacman.y+= this.pacman.speed;
}

Game.prototype.init = function(io) {
  {
    this.io = io;
    this.createPacman();
    this.createSprite();   
    this.animate();
  }
}

Game.prototype.animate = function() {
  var _this = this
  setInterval(function() {
    _this.pacmanMove()
    _this.io.sockets.emit('render', _this.pacman, _this.sprite);
  }, 60)
};

Game.prototype.keypress = function(key) {
  console.log(key);
    if(key == "37") this.pacman.direction = "left";
    else if(key == "38") this.pacman.direction = "up";
    else if(key == "39") this.pacman.direction = "right";
    else if(key == "40") this.pacman.direction = "down";
}


module.exports = Game;
