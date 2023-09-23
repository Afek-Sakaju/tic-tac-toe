function startGame() {
  playSound('start');
  isGameFinished = false;
  swapTurn();
  resetBoardCells();
  modifyElementsOnGameStart();
  updateCurrentTurnStatus();
}

function restartGame() {
  if (!isMatrixEmpty()) startGame();
}

function pickButton(position) {
  const boardButtons = getAllBoardCells();
  boardButtons[position].disable();
  boardButtons[position].sign = currentTurn;

  processGameCondition();
  if (isGameFinished) {
    lockUnselectedBoardCells();
    currentTurnStatusDisplay.switchMode(GAME_ELEMENT_MODES.HIDDEN);
  } else {
    swapTurn();
    updateBoardOnUserSelection();
    updateCurrentTurnStatus();
  }
}
