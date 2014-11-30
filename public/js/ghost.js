function Ghost() {
  this.speed = 5;
}

Ghost.prototype.render = function(status, ctx) {
    this.placeGhost(status, ctx);
}

Ghost.prototype.placeGhost = function(status, ctx) {
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, status.x, status.y, status.width, status.height);
    };
    img.src = status.src;
};