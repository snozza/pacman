var _ = require("underscore");
var ParentModel = require("./ParentModel");
var Maze = require("./maze");

function PacMan (id) {
  this.id = id;
  this.x = 50
  this.y = 45
  this.maze = Maze
  this.radius = 5;
  this.clearance = this.radius * 2;
  this.speed = 5;
  this.mouthOpenValue = 40;
  this.mouthPosition = -1;
  this.direction = 'right';
  this.score = 0;
  this.game;
}

ParentModel.inherit(PacMan);

PacMan.prototype.changeDirection = function (key) {
  console.log(this.game.eatenDots); 
  if(key == "37") this.direction = "left";
  else if(key == "38") this.direction = "up";
  else if(key == "39") this.direction = "right";
  else if(key == "40") this.direction = "down";
};

PacMan.prototype.pacmanMove = function() {
  this.checkDot();
  if (this.stopDirectionBlocked()) return;
  else if(this.direction == "right") this.x+= this.speed;
  else if(this.direction == "left") this.x-= this.speed;
  else if(this.direction == "up") this.y-= this.speed;
  else if(this.direction == "down") this.y+= this.speed;
}

PacMan.prototype.checkDot = function() {
  var dot = this.game.dots;
  for (var i = dot.length-1; i >= 0; i--) {
    if ((this.x - this.radius) <= dot[i].x && dot[i].x <= (this.x + this.radius)) {
      if ((this.y - this.radius) <= dot[i].y && dot[i].y <= (this.y + this.radius)) {
        this.score++;
        this.game.eatenDots.push(this.game.dots.splice(i, 1));
        this.game.sockets[this.id].emit('update:score', this.score);
      }
    }
  }
}


  // Game.prototype.isSpriteEaten = function(pacman, sprite) {
//   if ((.pacman.x - pacman.clearance) <= (sprite.x * 20) && (sprite.x * 20) <= (pacman.x + pacman.clearance)) {
//     if((pacman.y - pacman.clearance) <= (sprite.y * 20) && (sprite.y * 20) <= (pacman.y + pacman.clearance)) {   
//       this.score++;
//       this.createSprite();
//     }
//   }
// }


PacMan.prototype.pacmanBite = function() {
  if (this.mouthOpenValue <= 0) {
      this.mouthPosition = 1;
  }
  else if (this.mouthOpenValue >= 40){
    this.mouthPosition = -1;
  }
  this.mouthOpenValue += (5 * this.mouthPosition);
}

PacMan.prototype.stopDirectionBlocked = function() {
  switch (this.direction) {
    case 'right':
      if (this.blockChecker().indexOf('Right') !== -1) return true;
      break;
    case 'left':
      if (this.blockChecker().indexOf('Left') !== -1)  return true;
      break;
    case 'down':
      if (this.blockChecker().indexOf('Down') !== -1)  return true;
      break;
    case 'up':
      if (this.blockChecker().indexOf('Up') !== -1)  return true;
      break;
  }
}


module.exports = PacMan;

    

