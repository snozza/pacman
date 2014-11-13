function Game() {
  this.pacman;
  this.sprite;
  this.socket;
  this.score = 0;
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

Game.prototype.pacmanMove = function(pacman) { 
  if(pacman.direction == "right") pacman.x+= pacman.speed;
  else if(pacman.direction == "left") pacman.x-= pacman.speed;
  else if(pacman.direction == "up") pacman.y-= pacman.speed;
  else if(pacman.direction == "down") pacman.y+= pacman.speed;
}

Game.prototype.pacmanBite = function(pacman) {
  if (this.pacman.mouthOpenValue <= 0) {
      this.pacman.mouthPosition = 1;
  }
  else if (this.pacman.mouthOpenValue >= 40){
    this.pacman.mouthPosition = -1;
  }
  this.pacman.mouthOpenValue += (5 * this.pacman.mouthPosition);
}

Game.prototype.isSpriteEaten = function(pacman, sprite) {
  if ((pacman.x - pacman.clearance) <= (sprite.x * 20) && (sprite.x * 20) <= (pacman.x + pacman.clearance)) {
    if((pacman.y - pacman.clearance) <= (sprite.y * 20) && (sprite.y * 20) <= (pacman.y + pacman.clearance)) {   
      this.score++;
      this.createSprite();
    }
  }
}

Game.prototype.checkScore = function () {
  if (this.score === 5) {
    this.score = 0;
    this.io.sockets.emit('game:over');
  }
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
    _this.checkScore();
    _this.isSpriteEaten(_this.pacman, _this.sprite)
    _this.pacmanBite(_this.pacman)
    _this.pacmanMove(_this.pacman)
    _this.io.sockets.emit('render', _this.pacman, _this.sprite, _this.score);
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
