function startGame() {
  isFinishedGame = false;
  playSound('start');
  swapTurn();
  resetBoardCells();
  hidePopUps();
  showCurrentTurn();
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
    lockUnselectedBoardButtons();
    currentTurnDisplay.switchMode(GAME_ELEMENT_MODES.HIDDEN);
  } else {
    swapTurn();
    toggleCurrentSelection();
    showCurrentTurn();
  }
}
