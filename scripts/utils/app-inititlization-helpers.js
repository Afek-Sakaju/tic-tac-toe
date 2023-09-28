function getInitializedBoardCell(num) {
  const cellElement = document.createElement('div');
  cellElement.id = `board-cell-${num}`;
  cellElement.className = 'game-board-cell cell-placeholder locked';
  cellElement.setAttribute('disabled', 'true');

  cellElement.addEventListener('click', () => {
    const isDisabled = cellElement.getAttribute('disabled');
    // Subtracting 1 because the matrix calculations are based on index.
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

  const gameBoardMatrix = initialMatrix.map((row, i) => {
    return row.map((num) => getInitializedBoardCell(num));
  });
  return gameBoardMatrix;
}

function initializeGameBoardCells() {
  const gameBoardContainer = document.getElementById('game-board');

  const boardCells = getAllBoardCells();
  boardCells.forEach(({ cellElement }) => {
    gameBoardContainer.appendChild(cellElement);
  });
}
