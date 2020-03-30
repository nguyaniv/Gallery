'use strict';
const WALL = '<img class="wall" src="imgs/wall.jpg"/>'
const FOOD = '.';
const EMPTY = ' ';
const SUPERFOOD = 'O'
const CHERRY = '🍒';

var gBoard;
var foodCount = 0 // CR: lets stick to adding g for globals (every other global has g except this poor var :) )
var gDeletedGhosts = [];
var gCherryInterval;


var gGame = {
  score: 0,
  isOn: false
};

function init() {
  gBoard = buildBoard();

  createPacman(gBoard);
  createGhosts(gBoard);
  // CR: nice work!
  gCherryInterval = setInterval(createCherry, 15000);
  printMat(gBoard, '.board-container');
  // console.table(gBoard);
  gGame.isOn = true;
}

function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {

      board[i][j] = FOOD;


      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j === 3 && i > 4 && i < SIZE - 2)) {

        board[i][j] = WALL;
      }
      if (i === 1 && j === 1 || i === 8 && j === 8 ||
        i === 1 && j === 8 || i === 8 && j === 1
      ) {

        board[i][j] = SUPERFOOD
      }

    }
  }
  return board;
}

function updateScore(value) {
  // Update both the model and the dom for the score
  gGame.score += value;
  document.querySelector('header h3 span').innerText = gGame.score;

}


function gameOver() {
  console.log('Game Over');
  document.querySelector('h2').innerHTML = '<h2> Game Over <h2/>'
  document.querySelector('button').style.display = 'block';
  gGame.isOn = false;
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;
}


function resetGame() {
  init()
  gGame.score = 0;
  document.querySelector('h2').innerHTML = '';
  document.querySelector('button').style.display = 'none';
  foodCount = 0


  gCherryInterval = setInterval(createCherry, 15000);

}


function victory() {

  document.querySelector('h2').innerHTML = '<h2> Victorious <h2/>'
  document.querySelector('button').style.display = 'block';
  gGame.isOn = false;
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;

}





// functions ready From lesson
function getEmptyCells() {
  var emptyCells = [];
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[0].length; j++) {
      if (gBoard[i][j] === EMPTY) {
        emptyCells.push({
          i: i,
          j: j
        })
      }
    }
  }
  return emptyCells;
}

function createCherry() {
  var emptyCells = getEmptyCells();
  var randCherryLocation = emptyCells[getRandomIntInclusive(0, emptyCells.length - 1)]
  if (!randCherryLocation) return

  gBoard[randCherryLocation.i][randCherryLocation.j] = CHERRY;
  renderCell(randCherryLocation, CHERRY);

}

function removeGhost(ghostLoc) {
  var deletedGhost = gGhosts.splice(getGhostIndex(ghostLoc), 1);
  if (deletedGhost[0].currCellContent === FOOD) {
    updateScore(1)
    foodCount++
    console.log(`this monster had food`);

    deletedGhost[0].currCellContent = EMPTY
    console.log(deletedGhost[0].currCellContent);

  }
  gDeletedGhosts.push(...deletedGhost)
}

function resetGhosts() {
  gGhosts.push(...gDeletedGhosts)
  gDeletedGhosts = []
}

// CR: nice!
function getGhostIndex(location) {
  for (var i = 0; i < gGhosts.length; i++) {
    if (gGhosts[i].location.i === location.i && gGhosts[i].location.j === location.j) {
      return i;
    }
  }
  return -1;
}