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
  if (gameCondition) {
    playSound(gameCondition);
    isGameFinished = true;
    if (gameCondition === 'victory') highlightWinningCells();
    modifyElementsOnFinishedGame();
    lockUnselectedBoardCells();
  } else {
    const currentSelectionSound = `selection-sound-${currentTurn}`;
    playSound(currentSelectionSound);
    swapTurn();
    updateBoardCellsOnChange();
    updateCurrentTurnStatus();
  }
}
