'use strict'

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}
function openReadmePopup() {
  const readmeText = `
  # Pacman Game

  ## Introduction
  
  Welcome to the Pacman Game! This is a classic arcade game where you control Pacman, the yellow character, and your goal is to eat all the food on the board while avoiding ghosts. If Pacman eats a ghost while in super mode, the ghost disappears temporarily, and you earn points.
  
  ## How to Play
  
  - Use the arrow keys on your keyboard to move Pacman: up, down, left, and right.
  - Pacman will continue moving in the direction you press until it hits a wall or changes direction.
  - Eat all the regular food dots and cherries on the board to win points.
  - Avoid colliding with ghosts, as it will result in a game over unless Pacman is in super mode.
  
  ## Points Calculation
  
  - Eating regular food dots: Each regular food dot eaten earns you 1 point.
  - Eating cherries: Eating a cherry earns you 10 points.
  - Eating ghosts in super mode: If Pacman eats a ghost while in super mode, you earn 50 points.
  - Winning the game: If you eat all the food dots and cherries on the board, you win the game.
  - Losing the game: The game ends if Pacman collides with a ghost while not in super mode.
  - Bonus points: Every second left on the clock when you win gives you an additional 100,000 / time points.
  
  ## Development
  
  This Pacman game was developed using HTML, CSS, and JavaScript.
  The game logic is implemented using JavaScript, while HTML and CSS are used for the user interface and styling.
  The game board is generated dynamically, and Pacman and ghosts move according to the player's input.
  
  ## Credits
  
  This Pacman game was created by Michael Flaischer. It is inspired by the classic arcade game Pacman developed by Namco.
  
  Enjoy playing Pacman!   
    `

  // Open a new window with README text
  const readmeWindow = window.open('', 'README', 'width=600,height=400')
  readmeWindow.document.body.innerText = readmeText
}
