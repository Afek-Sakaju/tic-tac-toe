function startGame(enableDelay, delayDuration = 2) {
  const startGameLogic = () => {
    playSound('start');
    isGameFinished = false;
    swapTurn();
    resetBoardCells();
    executeBotLogicIfItsTurn();
  };

  if (enableDelay) setTimeout(() => startGameLogic(), 1000 * delayDuration);
  else startGameLogic();
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
    startGame(true);
  }
}

window.onload = () => {
  initializeGameBoardCells();
  startGame(true);
};
