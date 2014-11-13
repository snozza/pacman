function Pacman(id) {
  this.id = id;
  this.width = 500;
  this.height = 500;
  this.radius = 10;
  this.clearance = this.radius * 2;
  this.speed = 5;
  this.mouthOpenValue = 40;
  this.mouthPosition = -1;
}

Pacman.prototype.render = function(context, status) {
  context.beginPath();
  if (status.direction === 'right') {
    context.arc(status.x, status.y, 20, 
      (Math.PI / 180) * this.mouthOpenValue, 
      (Math.PI / 180) * (360 - this.mouthOpenValue));
  }
  else if (status.direction === 'left'){
    context.arc(status.x, status.y, 20,
      (Math.PI / 180) * (179 - this.mouthOpenValue), //to stop flicker dont draw 180 to 180
      (Math.PI / 180) * (180 + this.mouthOpenValue), true); 
  }
  else if (status.direction === 'up'){
    context.arc(status.x, status.y, 20,
      (Math.PI / 180) * (269 - this.mouthOpenValue),
      (Math.PI / 180) * (270 + this.mouthOpenValue), true); 
  }
  else {
    context.arc(status.x, status.y, 20,
      (Math.PI / 180) * (89 - this.mouthOpenValue),
      (Math.PI / 180) * (90 + this.mouthOpenValue), true); 
  }

  context.lineTo(status.x, status.y);
  context.fillStyle = '#000';
  context.fill();
}
