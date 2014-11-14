$(document).ready(function(){    

  function Game(canvas, context, socket) {
    this.socket = socket;
    this.canvas = canvas;
    this.context = context;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.players = {};
    this.clientID = null
  }

  Game.prototype.startGame = function() {
    this.socket.emit('start');
    this.listenForKey();
    this.linkToGameServer();
    this.listenForUpdate();
  }

  Game.prototype.listenForKey = function() {
    _this = this
    $(document).keydown(function(event){
      var key = event.which;
      _this.socket.emit('keypress', {keypress: key, socket_id: _this.clientID});
    });
  }

  Game.prototype.linkToGameServer = function() {
    var _this = this;
    this.socket.on('gameDetails', function(gameID) {
      _this.applyLinkToGame(gameID)
    });
  }

  Game.prototype.applyLinkToGame = function(gameID) {
    var _this = this;
    this.setClientID(this.socket.io.engine.id);
    _(gameID.IDs).each(function (id) {
      _this.newPlayer(id)
    });
  }

  Game.prototype.setClientID = function(uniqueID) {
    this.clientID = this.clientID || uniqueID;
  }

  Game.prototype.newPlayer = function(id) {
    this.players[id] = new Pacman(id);
  }

  Game.prototype.listenForUpdate = function() {
    _this = this;
    socket.on('update', function(status) {     
      _this.renderAll(status);
      // this.paintSprite(sprite.x, sprite.y, sprite.size);  
      // paintScore(scoreText);   
    });

    // socket.on('game:over', function() {      
    //   startGame();
    // });
  };

  Game.prototype.renderAll = function (statuses) {
    _this = this;
    context.clearRect(0, 0, this.width, this.height);
    drawGrid(context)
    _(statuses).each(function(status) {
      _this.players[status.id].render(context, status)
    }); 

  }

  // Game.prototype.drawGrid = function () {
  //    context.fillStyle = "white";
  //    context.fillRect(0, 0, this.width, this.height);
  //  }



      

  // Game.prototype.paintSprite = function(x, y, size) {
  //   context.fillStyle = "blue";
  //   context.fillRect(x*size, y*size, size, size);
  //   context.strokeStyle = "white";
  //   context.strokeRect(x*size, y*size, size, size);
  // }

      // function paintScore(scoreText) {
      //   context.font="20px Georgia";
      //   context.fillText(scoreText, 5, height - 5);
      // }   

  var canvas = $("#canvas")[0];
  var context = canvas.getContext("2d");
  var socket = io();
  var game = new Game(canvas, context, socket);
  game.startGame()
})  
  