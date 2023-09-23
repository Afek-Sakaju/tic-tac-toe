function showCurrentTurn() {
  currentTurnDisplay.switchMode(GAME_ELEMENT_MODES.HIDDEN, true);
  currentTurnDisplay.element.innerText = `Next move: Player ${currentTurn.toUpperCase()}`;
}

function showPopups() {
  startGameButton.element.innerText = 'Play-Again';
  startGameButton.switchMode(GAME_ELEMENT_MODES.HIDDEN, true);
}

function disableEmptyBoardButtons() {
  const boardButtons = getAllBoardButtons();
  boardButtons
    .filter((btn) => btn.sign === null)
    .forEach((btn) => {
      btn.switchMode(GAME_ELEMENT_MODES.HIDDEN);
      btn.disable();
    });
}

function toggleCurrentSelection() {
  const oppositeTurn = currentTurn === 'o' ? 'x' : 'o';
  const classes = {
    add: currentTurn,
    remove: oppositeTurn,
  };

  const boardButtons = getAllBoardButtons();
  boardButtons.forEach((btn) => {
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

function resetAllBoardButtons() {
  const boardButtons = getAllBoardButtons();

  boardButtons.forEach((btn, i) => {
    btn.switchMode(GAME_ELEMENT_MODES.HIDDEN, true);
    btn.switchMode(GAME_ELEMENT_MODES.LOCKED, true);
    // eslint-disable-next-line no-param-reassign
    btn.sign = null;

    const dontHaveOnClick = !btn.element.hasAttribute('onClick');
    if (dontHaveOnClick) btn.addAttribute({ onclick: `pickButton(${i})` });
  });
  toggleCurrentSelection();
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

const hidePopUps = () => startGameButton.switchMode(GAME_ELEMENT_MODES.HIDDEN);

function processGameCondition() {
  const gameCondition = getGameCondition();
  const currentTurnActionSound = `action-${currentTurn}`;

  switch (gameCondition) {
    case 2:
      isFinishedGame = true;
      playSound('win');
      showPopups();
      displayWinningButtons();
      break;
    case 1:
      isFinishedGame = true;
      playSound('draw');
      showPopups();
      break;
    default:
      playSound(currentTurnActionSound);
  }
}
