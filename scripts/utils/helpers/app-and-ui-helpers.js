const playSound = (sound) => {
  if (isSoundMuted && sound !== 'unmute') return;
  new Audio(`./assets/sounds/${sound}.mp3`).play();
};

function getInitializedBoardCell(num) {
  const cellElement = document.getElementById(`board-cell-${num}`);
  cellElement.addEventListener('click', () => {
    const isDisabled = cellElement.getAttribute('disabled');
    if (!isDisabled) selectBoardCell(num);
  });

  return { cellElement, sign: null };
}

function updateScoresStats(gameCondition) {
  switch (gameCondition) {
    case 'victory': {
      playerScoreDisplay.innerText = ++playerScore;
      break;
    }
    case 'loss': {
      computerScoreDisplay.innerText = ++computerScore;
      break;
    }
    default: {
      tieScoreDisplay.innerText = ++tieScore;
    }
  }
}

function modifyElementsOnFinishedGame() {}

function modifyElementsOnGameStart() {}

function lockUnselectedBoardCells() {
  const boardCells = getAllBoardCells();
  boardCells
    .filter(({ sign }) => sign === null)
    .forEach(({ cellElement }) => {
      cellElement.classList.remove(currentTurnSign);
      cellElement.classList.add(STYLE_CLASSES.LOCKED_CELL);
      cellElement.setAttribute('disabled', true);
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
    const isDisabled = cellElement.getAttribute('disabled');

    if (isDisabled && isNotLocked) cellElement.removeAttribute('disabled');
    else cellElement.setAttribute('disabled', true);
  });
}

function resetBoardCells() {
  const boardCells = getAllBoardCells();

  boardCells.forEach((boardCell, i) => {
    boardCell.cellElement.classList.remove(STYLE_CLASSES.LOCKED_CELL);
    // eslint-disable-next-line no-param-reassign
    boardCell.sign = null;

    boardCell.cellElement.removeAttribute('disabled');
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
  const soundModeToSet = isSoundMuted ? 'unmute' : 'mute';

  playSound(soundModeToSet);
  isSoundMuted = !isSoundMuted;
  toggleMuteButton.removeAttribute('src');
  toggleMuteButton.setAttribute(
    'src',
    `./assets/pictures/${soundModeToSet}.png`
  );
};
