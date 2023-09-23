const getWinnerButtons = () => {
  return (
    getMatrixWinnersByRow() ||
    getMatrixWinnersByColumn() ||
    getMatrixWinnersBySlant()
  );
};

const playSound = (sound) => {
  if (isSoundMuted && sound !== 'unmute') return;
  new Audio(`./assets/sounds/${sound}.mp3`).play();
};

const getAllBoardCells = () => gameBoardMatrix.flat();

const assertArray = (value) => (value instanceof Array ? value : [value]);

const isMatrixEmpty = () => {
  const boardButtons = getAllBoardCells();
  return boardButtons.every((e) => e.sign === null);
};

const isMatrixFull = () => {
  const boardButtons = getAllBoardCells();
  return boardButtons.every((e) => e.sign !== null);
};

const setSelectedCellStatus = (position) => {
  const boardButtons = getAllBoardCells();
  boardButtons[position].disable();
  boardButtons[position].sign = currentTurn;
};

const getGameCondition = () => {
  const winningBoardButtons = getWinnerButtons();

  if (winningBoardButtons) return 'victory';
  if (isMatrixFull()) return 'tie';
};

const swapTurn = () => {
  currentTurn = currentTurn === 'o' ? 'x' : 'o';
};
