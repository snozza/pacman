var _ = require("underscore");
var ParentModel = require("./ParentModel");

function PacMan (id) {
  this.id = id;
  this.x = Math.round(Math.random() * (500 - 20));
  this.y = Math.round(Math.random() * (500 - 20));
  this.radius = 10;
  this.clearance = this.radius * 2;
  this.speed = 5;
  this.mouthOpenValue = 40;
  this.mouthPosition = -1;
  this.direction = 'right';
}

// ParentModel.inherit(PacMan);

PacMan.prototype.changeDirection = function (key) {
  // if stop direction blocked then return
  if(key == "37") this.direction = "left";
  else if(key == "38") this.direction = "up";
  else if(key == "39") this.direction = "right";
  else if(key == "40") this.direction = "down";
};

PacMan.prototype.pacmanMove = function() { 
  if(this.direction == "right") this.x+= this.speed;
  else if(this.direction == "left") this.x-= this.speed;
  else if(this.direction == "up") this.y-= this.speed;
  else if(this.direction == "down") this.y+= this.speed;
}

PacMan.prototype.pacmanBite = function() {
  if (this.mouthOpenValue <= 0) {
      this.mouthPosition = 1;
  }
  else if (this.mouthOpenValue >= 40){
    this.mouthPosition = -1;
  }
  this.mouthOpenValue += (5 * this.mouthPosition);
}

PacMan.prototype._stopDirectionBlocked = function(keyInput) {
  switch (keyInput) {
    case 39:
      if (this.blockChecker() === 'Right') return true;
      break;
    case 37:
      if (this.blockChecker() === 'Left') return true;
      break;
    case 40:
      if (this.blockChecker() === 'Down') return true;
      break;
    case 38:
      if (this.blockChecker() === 'Up') return true;
      break;
  }
}


module.exports = PacMan;

    

