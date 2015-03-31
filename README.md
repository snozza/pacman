Hacman
========================

## Hacman

### Introduction

HTML5/Canvas/Node.js/socket.io Pacman that was built over 3 days. The goal of this project was to produce a multiplayer pacman game, where people could instantly join and play a version of Pacman. The original decision was to produce the game using a Node.js server, and the Angular framework to handle the entire front end. By the end of the 3 days, we had two working versions of the game, the original Angular idea, and a combo HTML5 Canvas/Node.js version.

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

The original Angular version of the game progressed quite well in the beginning, however we realised by day two that it would likely to be slow to handle the player load that we were expecting in pacman. Due to the way we had designed the code, there was a large amount of page elements being reloaded upon every pacman 'move', leading to sloppy game performance. Therefore, we decided to try our hand at making a version using HTML5 Canvas to render the pacman, dots, and maze. Combined with Node.js and websockets, this lead to much faster version, and also allowed us to achieve the multiplayer feature that we originally planned.


### To-do List
- [ ] Hideous - this thing wasn't test driven.
- [ ] Improve game logic. Currently there is no method for winning the game.
- [ ] Improve collsion detection. There are instances where pacman can slightly intersect with maze wall
- [ ] Re-write the canvas code to only re-render necesary parts of the maze (rather than entire maze)
- [ ] Add Ghost A.I.

## Collaborators
Andrew Snead - (http://www.github.com/snozza)
Pablo Portabales = (http://www.github.com/galicians)
Sandrine Zhang Ferron  = (http://www.github.com/MadameSardine)
Denise Yu = (http://www.github.com/deniseyu)

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
