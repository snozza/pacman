function Pacman(id) {
  this.id = id
}

Pacman.prototype.render  = function(context) {
  context.fillStyle = "white";
  context.fillRect(0, 0, width, height);

  context.beginPath();
  if (pacman.direction === 'right') {
    context.arc(pacman.x, pacman.y, 20, 
      (Math.PI / 180) * pacman.mouthOpenValue, 
      (Math.PI / 180) * (360 - pacman.mouthOpenValue));
  }
  else if (pacman.direction === 'left'){
    context.arc(pacman.x, pacman.y, 20,
      (Math.PI / 180) * (179 - pacman.mouthOpenValue), //to stop flicker dont draw 180 to 180
      (Math.PI / 180) * (180 + pacman.mouthOpenValue), true); 
  }
  else if (pacman.direction === 'up'){
    context.arc(pacman.x, pacman.y, 20,
      (Math.PI / 180) * (269 - pacman.mouthOpenValue),
      (Math.PI / 180) * (270 + pacman.mouthOpenValue), true); 
  }
  else {
    context.arc(pacman.x, pacman.y, 20,
      (Math.PI / 180) * (89 - pacman.mouthOpenValue),
      (Math.PI / 180) * (90 + pacman.mouthOpenValue), true); 
  }

  context.lineTo(pacman.x, pacman.y);
  context.fillStyle = '#000';
  context.fill();
}

// Pacman.prototype.paint = function() {
//   {     
  
       
//   }   