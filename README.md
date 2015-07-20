Hacman
========================

### Introduction

HTML5/Canvas/Node.js/socket.io Pacman that was built over 3 days. Mess around with prototypical inheritance. The goal of this project was to produce a multiplayer pacman game, where people could instantly join and play a version of Pacman.

### Languages/Platforms/Tools

* Node.js
* Angular
* HTML5
* Socket.io
* Mocha
* Express
* jQuery
* Heroku

### Learning Outcomes

HTML5 Canvas needs to be cleaned up, the re-rendering currently causes the packman game to be super slow.


### To-do List
- [ ] Hideous - this thing wasn't test driven.
- [ ] Improve game logic. Currently there is no method for winning the game.
- [ ] Improve collsion detection. There are instances where pacman can slightly intersect with maze wall
- [ ] Re-write the canvas code to only re-render necesary parts of the maze (rather than entire maze)
- [ ] Add Ghost A.I.

### Instructions

The live version of the site is available at [http://hacman.herokuapp.com/](http://hacman.herokuapp.com/).

Clone the repository:

```
$ git clone git@github.com:snozza/pacman.git
```

Change into the directory and npm install the modules:

```
$ cd pacman
$ npm install
```

Run the tests: 

```
$ mocha
```

Start the node server and visit http://localhost:8080/

```
$ node app.js
