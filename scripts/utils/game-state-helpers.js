const setSelectedCellStatus = (position) => {
  const boardButtons = getAllBoardCells();
  boardButtons[position].cellElement.classList.add('locked');
  boardButtons[position].cellElement.setAttribute('disabled', true);
  boardButtons[position].sign = currentTurn;
};

const getGameCondition = () => {
  const winningBoardButtons = getWinningCells();

  if (winningBoardButtons) return 'victory';
  return isMatrixFull() ? 'tie' : undefined;
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
