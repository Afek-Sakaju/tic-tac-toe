function updateCurrentTurnStatus() {
  currentTurnStatusDisplay.innerText = `Next move: Player ${currentTurn.toUpperCase()}`;
}

function modifyElementsOnFinishedGame() {
  startGameButton.innerText = 'Play-Again';
  startGameButton.classList.remove(GAME_ELEMENT_MODES.HIDDEN);
  currentTurnStatusDisplay.classList.add(GAME_ELEMENT_MODES.HIDDEN);
}

function modifyElementsOnGameStart() {
  startGameButton.classList.add(GAME_ELEMENT_MODES.HIDDEN);
  currentTurnStatusDisplay.classList.remove(GAME_ELEMENT_MODES.HIDDEN);
}

function lockUnselectedBoardCells() {
  const boardButtons = getAllBoardCells();
  boardButtons
    .filter(({ sign }) => sign === null)
    .forEach(({ cellElement }) => {
      cellElement.classList.remove(currentTurn);
      cellElement.classList.add('locked');
      cellElement.setAttribute('disabled', true);
    });
}

function updateBoardCellsOnChange() {
  const oppositeTurn = currentTurn === 'o' ? 'x' : 'o';
  const classes = {
    add: currentTurn,
    remove: oppositeTurn,
  };

  const boardCells = getAllBoardCells();
  boardCells.forEach(({ cellElement }) => {
    const isNotDisabled = !cellElement.classList.contains('locked');

    if (isGameFinished || isNotDisabled) {
      cellElement.classList.remove(
        GAME_ELEMENT_MODES.EMPTY,
        GAME_ELEMENT_MODES.LOCKED,
        GAME_ELEMENT_MODES.WINNER,
        classes.remove
      );

      cellElement.classList.add(classes.add);
    }
  });
}

function resetBoardCells() {
  const boardCells = getAllBoardCells();

  boardCells.forEach((boardCell, i) => {
    boardCell.cellElement.classList.remove(GAME_ELEMENT_MODES.LOCKED);
    // eslint-disable-next-line no-param-reassign
    boardCell.sign = null;

    boardCell.cellElement.removeAttribute('disabled');
  });
  updateBoardCellsOnChange();
}

const highlightWinningBoardCells = () => {
  const winningBoardButtons = getWinningCells();
  winningBoardButtons.forEach(({ cellElement }) =>
    cellElement.classList.add(GAME_ELEMENT_MODES.WINNER)
  );
};

function toggleMuteStatus() {
  const soundModeToSet = isSoundMuted ? 'unmute' : 'mute';

  playSound(soundModeToSet);
  isSoundMuted = !isSoundMuted;
  toggleMuteButton.removeAttribute('src');
  toggleMuteButton.setAttribute(
    'src',
    `./assets/pictures/${soundModeToSet}.png`
  );
}
