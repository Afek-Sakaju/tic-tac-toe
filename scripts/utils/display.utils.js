function showCurrentTurn() {
  currentTurnDisplay.element.innerText = `The turn of ${currentTurn} `;
}

function showPopups() {
  startGameButton.element.innerText = 'Play-Again';
  startGameButton.switchMode(GAME_ELEMENT_MODES.OFF, true);
}

function disableEmptyBoardButtons() {
  const boardButtons = getAllBoardButtons();
  boardButtons
    .filter((btn) => btn.sign === null)
    .forEach((btn) => {
      btn.switchMode(GAME_ELEMENT_MODES.OFF);
      btn.disable();
    });
}

function toggleCurrentSelection() {
  const classes = {
    add: currentTurn === 'O' ? 'player-1' : 'player-2',
    remove: currentTurn === 'O' ? 'player-2' : 'player-1',
  };

  const boardButtons = getAllBoardButtons();
  boardButtons.forEach((btn) => {
    const isNotDisabled = !btn.element.classList.contains('disabled');

    if (isFinishedGame || isNotDisabled) {
      btn.switchMode(
        [
          GAME_ELEMENT_MODES.EMPTY,
          GAME_ELEMENT_MODES.DISABLED,
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
    btn.switchMode(GAME_ELEMENT_MODES.OFF, true);
    btn.switchMode(GAME_ELEMENT_MODES.DISABLED, true);
    // eslint-disable-next-line no-param-reassign
    btn.sign = null;

    const dontHaveOnClick = !btn.element.hasAttribute('onClick');
    if (dontHaveOnClick) btn.addAttribute({ onclick: `pickButton(${i})` });
  });
  toggleCurrentSelection();
}

function toggleSound() {
  const switchMode = isSoundMuted ? 'on' : 'off';

  playSound(switchMode);
  isSoundMuted = !isSoundMuted;
  soundButton.deleteAttribute('src');
  soundButton.addAttribute({
    src: `./assets/pictures/toggle-sound-${switchMode}.png`,
  });
}

const displayWinningButtons = () => {
  const winningBoardButtons = getWinnerButtons();
  winningBoardButtons.forEach((btn) =>
    btn.switchMode(GAME_ELEMENT_MODES.WINNER)
  );
};

const hidePopUps = () => startGameButton.switchMode(GAME_ELEMENT_MODES.OFF);

function processGameCondition() {
  const gameCondition = getGameCondition();

  switch (gameCondition) {
    case 2:
      isFinishedGame = true;
      playSound('win');
      showPopups();
      displayWinningButtons();
      break;
    case 1:
      isFinishedGame = true;
      playSound('fullBoard');
      showPopups();
      break;
    default:
      playSound('action');
  }
}
