function updateCurrentTurnStatus() {
  currentTurnDisplay.element.innerText = `Next move: Player ${currentTurn.toUpperCase()}`;
}

function modifyElementsOnFinishedGame() {
  startGameButton.element.innerText = 'Play-Again';
  startGameButton.switchMode(GAME_ELEMENT_MODES.HIDDEN, true);
}

function modifyElementsOnGameStart() {
  startGameButton.switchMode(GAME_ELEMENT_MODES.HIDDEN);
  currentTurnDisplay.switchMode(GAME_ELEMENT_MODES.HIDDEN, true);
}

function lockUnselectedBoardCells() {
  const boardButtons = getAllBoardCells();
  boardButtons
    .filter((btn) => btn.sign === null)
    .forEach((btn) => {
      btn.switchMode(currentTurn, true);
      btn.disable();
    });
}

function updateBoardOnUserSelection() {
  const oppositeTurn = currentTurn === 'o' ? 'x' : 'o';
  const classes = {
    add: currentTurn,
    remove: oppositeTurn,
  };

  const boardCells = getAllBoardCells();
  boardCells.forEach((btn) => {
    const isNotDisabled = !btn.element.classList.contains('locked');

    if (isFinishedGame || isNotDisabled) {
      btn.switchMode(
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
    btn.switchMode(GAME_ELEMENT_MODES.HIDDEN, true);
    btn.switchMode(GAME_ELEMENT_MODES.LOCKED, true);
    // eslint-disable-next-line no-param-reassign
    btn.sign = null;

    const dontHaveOnClick = !btn.element.hasAttribute('onClick');
    if (dontHaveOnClick) btn.addAttribute({ onclick: `pickButton(${i})` });
  });
  updateBoardOnUserSelection();
}

function toggleSound() {
  const soundModeToSet = isSoundMuted ? 'unmute' : 'mute';

  playSound(soundModeToSet);
  isSoundMuted = !isSoundMuted;
  soundButton.deleteAttribute('src');
  soundButton.addAttribute({
    src: `./assets/pictures/${soundModeToSet}.png`,
  });
}

const displayWinningButtons = () => {
  const winningBoardButtons = getWinnerButtons();
  winningBoardButtons.forEach((btn) =>
    btn.switchMode(GAME_ELEMENT_MODES.WINNER)
  );
};

function processGameCondition() {
  const gameCondition = getGameCondition();
  const currentSelectionSound = `selection-sound-${currentTurn}`;

  switch (gameCondition) {
    case 2:
      isFinishedGame = true;
      playSound('win');
      modifyElementsOnFinishedGame();
      displayWinningButtons();
      break;
    case 1:
      isFinishedGame = true;
      playSound('draw');
      modifyElementsOnFinishedGame();
      break;
    default:
      playSound(currentSelectionSound);
  }
}
