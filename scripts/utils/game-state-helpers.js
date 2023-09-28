const setSelectedCellStatus = (position) => {
  const boardCells = getAllBoardCells();
  boardCells[position].cellElement.classList.add('locked');
  boardCells[position].cellElement.setAttribute('disabled', true);
  boardCells[position].sign = currentTurn;
};

const getGameCondition = () => {
  const winningBoardCells = getWinningCells();

  if (winningBoardCells) return 'victory';
  return isMatrixFull() ? 'tie' : undefined;
};

const swapTurn = () => {
  currentTurn = getOppositeTurn();
};

function finishGame(gameCondition) {
  playSound(gameCondition);
  isGameFinished = true;
  if (gameCondition === 'victory') highlightWinningBoardCells();
  modifyElementsOnFinishedGame();
  lockUnselectedBoardCells();
}

function continueGame() {
  const currentSelectionSound = `selection-sound-${currentTurn}`;
  playSound(currentSelectionSound);
  swapTurn();
  updateBoardCellsOnChange();
  updateCurrentTurnStatus();
  executeBotMoveIfItsTurn();
}
