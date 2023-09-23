function startGame() {
  isFinishedGame = false;
  playSound('start');
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
  if (isFinishedGame) {
    lockUnselectedBoardCells();
    currentTurnDisplay.switchMode(GAME_ELEMENT_MODES.HIDDEN);
  } else {
    swapTurn();
    updateBoardOnUserSelection();
    updateCurrentTurnStatus();
  }
}
