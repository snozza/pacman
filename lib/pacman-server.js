var _ = require("underscore");
var ParentModel = require("./ParentModel");

function PacMan (id, x, y) {
  this.id;
  this.x = x;
  this.y = y;
  this.radius = 10;
  this.clearance = this.radius * 2;
  this.speed = 5;
  this.mouthOpenValue = 40;
  this.mouthPosition = -1;
  this.direction = 'right';
}

ParentModel.inherit(PacMan);

PacMan.prototype.changeDirection = function (keyInput) {
  // if (this._stopDirectionBlocked(keyInput)) return;
    switch (keyInput) {
      case 39:
        this.direction = "right";
        break;
      case 37:
        this.direction = "left";
        break;
      case 40:
        this.direction = "down";
        break;
      case 38:
        this.direction = "up";
        break;
    }
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

    

