function startGame(enableDelay, delayDuration, shouldPlaySound = true) {
  const startGameLogic = () => {
    if (shouldPlaySound) playSound('start');
    isGameFinished = false;
    swapTurn();
    resetBoardCells();
    executeBotLogicIfItsTurn();
  };

  if (enableDelay) setTimeout(() => startGameLogic(), 1000 * delayDuration);
  else startGameLogic();
}

function resetStats() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;

  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
  tieScoreDisplay.innerText = tieScore;
}

function selectBoardCell(position) {
  setSelectedCellStatus(position);

  const gameCondition = getGameCondition();
  // Undefined gameCondition means the game continues.
  if (!gameCondition) continueGame();
  else {
    const isTie = gameCondition === 'tie';
    finishGame(gameCondition);
    startGame(true, isTie ? 1 : 2);
  }
}

window.onload = () => {
  initializeGameBoardCells();
  startGame(true, 2, false);
};
