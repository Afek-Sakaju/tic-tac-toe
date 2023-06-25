function swapTurn() {
  currentTurn = currentTurn === 'O' ? 'X' : 'O';
}

function getWinnerButtons() {
  return (
    getMatrixWinnersByRow() ||
    getMatrixWinnersByColumn() ||
    getMatrixWinnersBySlant()
  );
}

function playSound(sound) {
  if (isSoundMuted && sound !== 'on') return;
  new Audio(`./assets/sounds/${sound}.mp3`).play();
}

const getAllBoardButtons = () => gameMatrix.flat();

const assertArray = (value) => (value instanceof Array ? value : [value]);

const isMatrixEmpty = () => {
  const boardButtons = getAllBoardButtons();
  return boardButtons.every((e) => e.sign === null);
};

const isMatrixFull = () => {
  const boardButtons = getAllBoardButtons();
  return boardButtons.every((e) => e.sign !== null);
};

const getGameCondition = () => {
  const winningBoardButtons = getWinnerButtons();

  if (winningBoardButtons) return 2; // 2 - There is a winner
  if (isMatrixFull()) return 1; // 1 - Draw (full board)
  return 0; // 0 - Game have'nt finished yet
};
