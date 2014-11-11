function PacMan () {
}

PacMan.prototype.render = function (context) {
  context.fillStyle = '#FF0';
  context.beginPath();
  if (this.direction === 1) {
    c.arc(this.x, 100, 20, 
      (Math.PI / 180) * this.mouthOpenValue, 
      (Math.PI / 180) * (360 - this.mouthOpenValue));
  }
  else {
    c.arc(this.x, 100, 20,
      (Math.PI / 180) * (179 - this.mouthOpenValue), //to stop flicker dont draw 180 to 180
      (Math.PI / 180) * (180 + this.mouthOpenValue), true); 
  }
  context.closePath();