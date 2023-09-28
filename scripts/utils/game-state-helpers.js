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

  if (winningBoardCells) return 'victory';
  return isMatrixFull() ? 'tie' : undefined;
};

const swapTurn = () => {
  currentTurnSign = getWaiterTurn();
};

function finishGame(gameCondition) {
  playSound(gameCondition);
  isGameFinished = true;
  if (gameCondition === 'victory') highlightWinningBoardCells();
  modifyElementsOnFinishedGame();
  lockUnselectedBoardCells();
}

function continueGame() {
  const currentSelectionSound = `selection-sound-${currentTurnSign}`;
  playSound(currentSelectionSound);
  swapTurn();
  updateBoardCellsOnChange();
  updateCurrentTurnStatus();
  executeBotLogicIfItsTurn();
}
