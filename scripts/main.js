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

function selectBoardCell(position) {
  setSelectedCellStatus(position);

  const gameCondition = getGameCondition();
  // Undefined gameCondition means the game continues.
  if (!gameCondition) continueGame();
  else finishGame(gameCondition);
}

window.onload = () => initializeGameBoardCells();
