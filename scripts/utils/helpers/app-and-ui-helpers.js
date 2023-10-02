const playSound = (sound) => {
  if (isSoundMuted && sound !== SOUND_FILE_NAMES.UNMUTE) return;
  new Audio(`./assets/sounds/${sound}.mp3`).play();
};

function getInitializedBoardCell(num) {
  const cellElement = document.getElementById(`board-cell-${num}`);
  cellElement.addEventListener('click', () => {
    const isDisabled = cellElement.getAttribute(DISABLED_ATTR);
    if (!isDisabled) selectBoardCell(num);
  });

  return { cellElement, sign: null };
}

function updateScoresStats(gameCondition) {
  switch (gameCondition) {
    case GAME_CONDITIONS.VICTORY: {
      playerScoreDisplay.innerText = ++playerScore;
      break;
    }
    case GAME_CONDITIONS.LOSS: {
      computerScoreDisplay.innerText = ++computerScore;
      break;
    }
    default: {
      tieScoreDisplay.innerText = ++tieScore;
    }
  }
}

function lockUnselectedBoardCells() {
  const boardCells = getAllBoardCells();
  boardCells
    .filter(({ sign }) => sign === null)
    .forEach(({ cellElement }) => {
      cellElement.classList.remove(currentTurnSign);
      cellElement.classList.add(STYLE_CLASSES.LOCKED_CELL);
      cellElement.setAttribute(DISABLED_ATTR, true);
    });
}

function updateBoardCellsOnChange() {
  const waiterTurn = getWaiterTurn();
  const classes = {
    add: currentTurnSign,
    remove: waiterTurn,
  };

  const boardCells = getAllBoardCells();
  boardCells.forEach(({ cellElement }) => {
    const isNotDisabled = !cellElement.classList.contains(
      STYLE_CLASSES.LOCKED_CELL
    );

    if (isGameFinished || isNotDisabled) {
      cellElement.classList.remove(
        STYLE_CLASSES.PLACEHOLDER_CELL,
        STYLE_CLASSES.LOCKED_CELL,
        STYLE_CLASSES.WINNER_CELL,
        classes.remove
      );

      cellElement.classList.add(classes.add);
    }
  });
}

function toggleBoardCellSelectionDisabled() {
  const boardCells = getAllBoardCells();
  boardCells.forEach(({ cellElement }) => {
    const isNotLocked = !cellElement.classList.contains(
      STYLE_CLASSES.LOCKED_CELL
    );
    const isDisabled = cellElement.getAttribute(DISABLED_ATTR);

    if (isDisabled && isNotLocked) cellElement.removeAttribute(DISABLED_ATTR);
    else cellElement.setAttribute(DISABLED_ATTR, true);
  });
}

function resetBoardCells() {
  const boardCells = getAllBoardCells();

  boardCells.forEach((boardCell, i) => {
    boardCell.cellElement.classList.remove(STYLE_CLASSES.LOCKED_CELL);
    // eslint-disable-next-line no-param-reassign
    boardCell.sign = null;

    boardCell.cellElement.removeAttribute(DISABLED_ATTR);
  });
  updateBoardCellsOnChange();
}

const highlightWinningBoardCells = () => {
  const winningBoardCells = getWinningCells();
  winningBoardCells.forEach(({ cellElement }) =>
    cellElement.classList.add(STYLE_CLASSES.WINNER_CELL)
  );
};

const toggleMuteStatus = () => {
  const soundModeToSet = isSoundMuted
    ? SOUND_FILE_NAMES.UNMUTE
    : SOUND_FILE_NAMES.MUTE;

  playSound(soundModeToSet);
  isSoundMuted = !isSoundMuted;
  toggleMuteButton.removeAttribute('src');
  toggleMuteButton.setAttribute(
    'src',
    `./assets/pictures/${soundModeToSet}.png`
  );
};
