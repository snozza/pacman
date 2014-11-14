var _ = require("underscore");

function PacManGuy() {
}

PacManGuy.inherit = function(model) {
  function ParentModel() {}
  ParentModel.prototype = this.prototype;
  model.prototype = new ParentModel();
};

PacManGuy.prototype.isUpBlocked = function(wall) {
  return this._isBeneath(wall) && this._upCollision(wall);
};

PacManGuy.prototype.isDownBlocked = function(wall) {
  return this._isAbove(wall) && this._xCollision(wall);
};

PacManGuy.prototype.isLeftBlocked = function(wall) {
  return this._isToTheRight && this._yCollision(wall)
};

PacManGuy.prototype.isRightBlocked = function(wall) {
  return this._isToTheLeft && this._yCollision(wall)
};

PacManGuy.prototype._isBeneath = function(wall) {
  return this.y > wall.y;
};

PacManGuy.prototype._isAbove = function(wall) {
  return this.y < wall.y;
};

PacManGuy.prototype._isToTheRight = function(wall) {
  return this.x > wall.x;
}

PacManGuy.prototype._isToTheLeft = function(wall) {
  return this.x < wall.x;
}

PacManGuy.prototype._xCollision = function(wall) {
  console.log(this.y)
  return this.x >= wall.x && this.x <= (wall.width + wall.x)
    && Math.abs(wall.y - this.y) < this.clearance;
};

PacManGuy.prototype._upCollision = function(wall) {
  console.log(this.y)
  return this.x >= wall.x && this.x <= (wall.width + wall.x)
    && (Math.abs(wall.y - this.y) < this.clearance);
};

PacManGuy.prototype._yCollision = function(wall) {
  return this.y >= wall.y && this.y <= (wall.height + wall.y)
    && Math.abs(wall.x - this.x) < this.clearance
}

PacManGuy.prototype.blockChecker = function () {
  var blockedPath;
  var _this = this;
  _(this.maze).each(function (wall) {
    if (_this.isUpBlocked(wall)) blockedPath = "Up";
    if (_this.isDownBlocked(wall)) blockedPath = "Down";
    if (_this.isLeftBlocked(wall)) blockedPath = "Left";
    if (_this.isRightBlocked(wall)) blockedPath = "Right";
  })
  return blockedPath;
};


module.exports = PacManGuy


