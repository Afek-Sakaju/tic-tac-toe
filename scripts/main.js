function startGame(delaySeconds) {
  setTimeout(() => {
    playSound('start');
    isGameFinished = false;
    swapTurn();
    resetBoardCells();
    modifyElementsOnGameStart();
    executeBotLogicIfItsTurn();
  }, 1000 * delaySeconds);
}

function restartGame() {
  if (!isMatrixEmpty()) startGame();
}

function selectBoardCell(position) {
  setSelectedCellStatus(position);

  const gameCondition = getGameCondition();
  // Undefined gameCondition means the game continues.
  if (!gameCondition) continueGame();
  else {
    finishGame(gameCondition);
    startGame(1.6);
  }
}

window.onload = () => {
  initializeGameBoardCells();
  startGame(1.9);
};
