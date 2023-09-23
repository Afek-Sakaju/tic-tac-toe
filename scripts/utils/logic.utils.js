function swapTurn() {
  currentTurn = currentTurn === 'o' ? 'x' : 'o';
}

function getWinnerButtons() {
  return (
    getMatrixWinnersByRow() ||
    getMatrixWinnersByColumn() ||
    getMatrixWinnersBySlant()
  );
}

function playSound(sound) {
  if (isSoundMuted && sound !== 'unmute') return;
  new Audio(`./assets/sounds/${sound}.mp3`).play();
}

const getAllBoardCells = () => gameMatrix.flat();

const assertArray = (value) => (value instanceof Array ? value : [value]);

const isMatrixEmpty = () => {
  const boardButtons = getAllBoardCells();
  return boardButtons.every((e) => e.sign === null);
};

const isMatrixFull = () => {
  const boardButtons = getAllBoardCells();
  return boardButtons.every((e) => e.sign !== null);
};

const getGameCondition = () => {
  const winningBoardButtons = getWinnerButtons();

  if (winningBoardButtons) return 'victory';
  if (isMatrixFull()) return 'tie';
};
