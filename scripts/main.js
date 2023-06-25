function startGame() {
  isFinishedGame = false;
  playSound('start');
  swapTurn();
  resetAllBoardButtons();
  hidePopUps();
  showCurrentTurn();
}

function restartGame() {
  if (!isMatrixEmpty()) startGame();
}

function pickButton(position) {
  const boardButtons = getAllBoardButtons();
  boardButtons[position].disable();
  boardButtons[position].sign = currentTurn;

  processGameCondition();
  if (isFinishedGame) disableEmptyBoardButtons();
  else {
    swapTurn();
    toggleCurrentSelection();
    showCurrentTurn();
  }
}
