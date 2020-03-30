
const PACMAN = '<img class="pacman" src="imgs/pacman.png"/>'

var gPacman;

function createPacman(board) {
  gPacman = {
    location: {
      i: 3,
      j: 5
    },
    isSuper: false
  };
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(eventKeyboard) {
  if (!gGame.isOn) return;
  // console.log('eventKeyboard:', eventKeyboard);

  var nextLocation = getNextLocation(eventKeyboard);
  // User pressed none-relevant key in the keyboard
  if (!nextLocation) return;

  var nextCell = gBoard[nextLocation.i][nextLocation.j];

  // Hitting a WALL, not moving anywhere
  if (nextCell === WALL) return;

  // Hitting FOOD? update score
  if (nextCell === FOOD) {
    updateScore(1)
    foodCount++
    console.log(foodCount);
  }
  if (nextCell === CHERRY) {
    updateScore(10)

    console.log('yamyam');

  }
  if (nextCell === SUPERFOOD) {
    if (gPacman.isSuper) return

    updateScore(4)
    gPacman.isSuper = true
    //setting pacman to deafult
    setTimeout(function () {
      gPacman.isSuper = false
    }, 5000)

  }
  // CR: we would want to make the game as generic as possible not bounded to a specific amount of food on board
  else if (foodCount === 56) victory()
  else if (nextCell === GHOST) {
    if (!gPacman.isSuper) {
      gameOver()
      renderCell(gPacman.location, EMPTY);
      return;
    } else removeGhost(gPacman.location)


    gGhosts.pop()
    updateScore(5);

  }



  // Update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  // Update the DOM
  renderCell(gPacman.location, EMPTY);

  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;

  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
  // Render updated model to the DOM

  renderCell(gPacman.location, PACMAN);

}

function getNextLocation(keyboardEvent) {
  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j
  };

  switch (keyboardEvent.code) {
    case 'ArrowUp':
      nextLocation.i--;

      break;
    case 'ArrowDown':
      nextLocation.i++;
      break;
    case 'ArrowLeft':
      nextLocation.j--;
      break;
    case 'ArrowRight':
      nextLocation.j++;
      break;
    default: return null;
  }
  return nextLocation;
}


