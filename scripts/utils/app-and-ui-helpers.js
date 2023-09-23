function updateCurrentTurnStatus() {
  currentTurnStatusDisplay.element.innerText = `Next move: Player ${currentTurn.toUpperCase()}`;
}

function modifyElementsOnFinishedGame() {
  startGameButton.element.innerText = 'Play-Again';
  startGameButton.toggleClass(GAME_ELEMENT_MODES.HIDDEN, true);
  currentTurnStatusDisplay.toggleClass(GAME_ELEMENT_MODES.HIDDEN);
}

function modifyElementsOnGameStart() {
  startGameButton.toggleClass(GAME_ELEMENT_MODES.HIDDEN);
  currentTurnStatusDisplay.toggleClass(GAME_ELEMENT_MODES.HIDDEN, true);
}

function lockUnselectedBoardCells() {
  const boardButtons = getAllBoardCells();
  boardButtons
    .filter((btn) => btn.sign === null)
    .forEach((btn) => {
      btn.toggleClass(currentTurn, true);
      btn.disable();
    });
}

function updateBoardCellsOnChange() {
  const oppositeTurn = currentTurn === 'o' ? 'x' : 'o';
  const classes = {
    add: currentTurn,
    remove: oppositeTurn,
  };

  const boardCells = getAllBoardCells();
  boardCells.forEach((btn) => {
    const isNotDisabled = !btn.element.classList.contains('locked');

    if (isGameFinished || isNotDisabled) {
      btn.toggleClass(
        [
          GAME_ELEMENT_MODES.EMPTY,
          GAME_ELEMENT_MODES.LOCKED,
          GAME_ELEMENT_MODES.WINNER,
          classes.remove,
        ],
        true
      );

      btn.addClass(classes.add);
    }
  });
}

function resetBoardCells() {
  const boardCells = getAllBoardCells();

  boardCells.forEach((btn, i) => {
    btn.toggleClass(GAME_ELEMENT_MODES.LOCKED, true);
    // eslint-disable-next-line no-param-reassign
    btn.sign = null;

    const dontHaveOnClick = !btn.element.hasAttribute('onClick');
    if (dontHaveOnClick) btn.addAttribute({ onclick: `selectBoardCell(${i})` });
  });
  updateBoardCellsOnChange();
}

const highlightWinningBoardCells = () => {
  const winningBoardButtons = getWinningCells();
  winningBoardButtons.forEach((btn) =>
    btn.toggleClass(GAME_ELEMENT_MODES.WINNER)
  );
};

function toggleMuteStatus() {
  const soundModeToSet = isSoundMuted ? 'unmute' : 'mute';

  playSound(soundModeToSet);
  isSoundMuted = !isSoundMuted;
  toggleMuteButton.deleteAttribute('src');
  toggleMuteButton.addAttribute({
    src: `./assets/pictures/${soundModeToSet}.png`,
  });
}
