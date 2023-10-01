function startGame(delayInSeconds = 2) {
  setTimeout(() => {
    playSound('start');
    isGameFinished = false;
    swapTurn();
    resetBoardCells();
    executeBotLogicIfItsTurn();
  }, 1000 * delayInSeconds ?? 0);
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
    startGame();
  }
}

window.onload = () => {
  initializeGameBoardCells();
  startGame();
};
