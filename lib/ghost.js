var _ = require("underscore");
var ParentModel = require("./ParentModel");
var Maze = require("./maze");

function Ghost() {
  this.x = 400;
  this.y = 400;
  this.maze = Maze;
  this.src = 'images/blue_ghost_lookleft.png',
  this.width = 20;
  this.height = 20;
}

ParentModel.inherit(Ghost);

Ghost.prototype.findPacman = function(pacman) {
  var distance = Math.sqrt(Math.pow( (this.x - pacman.x), 2) + Math.pow(this.y - pacman.y, 2));
}

module.exports = Ghost;