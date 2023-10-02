const getWaiterTurn = () => (currentTurnSign === 'o' ? 'x' : 'o');

const isCurrentTurnOfBot = () => currentTurnSign === BOT_TURN_SIGN;

const setSelectedCellStatus = (position) => {
  const boardCells = getAllBoardCells();
  boardCells[position].cellElement.classList.add(STYLE_CLASSES.LOCKED_CELL);
  boardCells[position].cellElement.setAttribute('disabled', true);
  boardCells[position].sign = currentTurnSign;
};

const getGameCondition = () => {
  const winningBoardCells = getWinningCells();

  if (winningBoardCells) {
    const isLoss = winningBoardCells[0].sign === BOT_TURN_SIGN;
    return isLoss ? 'loss' : 'victory';
  }
  return isMatrixFull() ? 'tie' : undefined;
};

const swapTurn = () => {
  currentTurnSign = getWaiterTurn();
};

function finishGame(gameCondition) {
  const isTie = gameCondition === 'tie';
  if (isTie) playSound('tie-game');
  else {
    playSound('won-game');
    highlightWinningBoardCells();
  }

  isGameFinished = true;
  updateScoresStats(gameCondition);
  lockUnselectedBoardCells();
}

function continueGame() {
  const currentSelectionSound = `selection-sound-${currentTurnSign}`;
  playSound(currentSelectionSound);
  swapTurn();
  updateBoardCellsOnChange();
  executeBotLogicIfItsTurn();
}
