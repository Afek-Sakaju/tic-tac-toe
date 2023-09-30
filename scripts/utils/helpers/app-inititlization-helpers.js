function getInitializedBoardCell(num) {
  const cellElementBox = document.createElement('div');
  cellElementBox.id = `board-cell-${num}`;
  cellElementBox.className = `${STYLE_CLASSES.BOARD_CELL} ${STYLE_CLASSES.PLACEHOLDER_CELL} ${STYLE_CLASSES.LOCKED_CELL}`;
  cellElementBox.setAttribute('disabled', 'true');

  cellElementBox.addEventListener('click', () => {
    const isDisabled = cellElementBox.getAttribute('disabled');
    if (!isDisabled) selectBoardCell(num);
  });

  const cellElement = document.createElement('div');
  cellElement.className = 'game-board-cell-content';

  cellElementBox.appendChild(cellElement);

  return { cellElement: cellElementBox, sign: null, id: num };
}

function getInitializedGameBoardMatrix() {
  const initialMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const gameBoardMatrix = initialMatrix.map((row) => {
    return row.map((num) => getInitializedBoardCell(num));
  });
  return gameBoardMatrix;
}

function initializeGameBoardCells() {
  const gameBoardContainer = document.getElementById(ELEMENTS_IDS.GAME_BOARD);

  const boardCells = getAllBoardCells();
  boardCells.forEach(({ cellElement }) => {
    gameBoardContainer.appendChild(cellElement);
  });
}
