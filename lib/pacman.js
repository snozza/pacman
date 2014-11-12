var _ = require("underscore");
var ParentModel = require("./ParentModel");

function PacMan () {
  this.size = 10;
  this.clearance = this.size * 2;
  this.speed = 200
  // this.maze = { height: 500, width: 500 }
  this.x = 40;
  this.y = 40;
  this.xRateChange = this.speed;
  this.yRateChange = 0;
  this.direction = 1;
}

ParentModel.inherit(PacMan);

PacMan.prototype.changeDirection = function (keyInput) {
  if (this._stopDirectionBlocked(keyInput)) return;
    switch (keyInput) {
      case 39:
        this.yRateChange = 0;
        this.xRateChange = this.speed;
        this.direction = 1;
        break;
      case 37:
        this.yRateChange = 0;
        this.xRatechange = -(this.speed);
        this.direction = -1;
      case 40:
        this.yRateChange = this.speed;
        this.xRateChange = 0;
      case 38:
        this.yRateChange = -(this.speed);
        this.xRateChange = 0;
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

    

