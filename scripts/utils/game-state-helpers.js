const setSelectedCellStatus = (position) => {
  const boardButtons = getAllBoardCells();
  boardButtons[position].disable();
  boardButtons[position].sign = currentTurn;
};

const getGameCondition = () => {
  const winningBoardButtons = getWinningCells();

  if (winningBoardButtons) return 'victory';
  if (isMatrixFull()) return 'tie';
};

const swapTurn = () => {
  currentTurn = currentTurn === 'o' ? 'x' : 'o';
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
}
