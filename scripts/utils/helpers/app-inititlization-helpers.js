function getInitializedBoardCell(num) {
  const cellElement = document.createElement('div');
  cellElement.id = `board-cell-${num}`;
  cellElement.className = `${STYLE_CLASSES.BOARD_CELL} ${STYLE_CLASSES.PLACEHOLDER_CELL} ${STYLE_CLASSES.LOCKED_CELL}`;
  cellElement.setAttribute('disabled', 'true');

  cellElement.addEventListener('click', () => {
    const isDisabled = cellElement.getAttribute('disabled');
    if (!isDisabled) selectBoardCell(num);
  });

  return { cellElement, sign: null, id: num };
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
