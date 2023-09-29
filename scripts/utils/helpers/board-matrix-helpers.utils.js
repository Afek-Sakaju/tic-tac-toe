const getAllBoardCells = () => gameBoardMatrix.flat();

const isMatrixEmpty = () => {
  const boardCells = getAllBoardCells();
  return boardCells.every(({ sign }) => sign === null);
};

const isMatrixFull = () => {
  const boardCells = getAllBoardCells();
  return boardCells.every(({ sign }) => sign !== null);
};

function getMatrixSlants(matrix) {
  const slant1 = [];
  const slant2 = [];

  const lastIndex = matrix.length - 1;

  for (let i = 0; i <= lastIndex; i++) {
    slant1.push(matrix[i][i]);
    slant2.push(matrix[i][lastIndex - i]);
  }

  return { slant1, slant2 };
}

function getCornerAndMiddleMatrixCells() {
  const rows = gameBoardMatrix.length;
  const columns = gameBoardMatrix[0].length;

  const middleRowIndex = Math.floor(rows / 2);
  const middleColIndex = Math.floor(columns / 2);

  const cornerCells = [
    gameBoardMatrix[0][0],
    gameBoardMatrix[0][columns - 1],
    gameBoardMatrix[rows - 1][0],
    gameBoardMatrix[rows - 1][columns - 1],
  ];

  const middleCell = gameBoardMatrix[middleRowIndex][middleColIndex];

  return [...cornerCells, middleCell];
}

function getMatrixWinningCellsByRow() {
  const winningRow = gameBoardMatrix.find((row) => {
    const { sign: primarySign } = row[0];

    const isWinningRow = row.every(({ sign }) => sign && sign === primarySign);
    return isWinningRow ? row : false;
  });

  return winningRow;
}

function getMatrixWinningCellsByColumn() {
  let winningColumn;
  for (let j = 0; j < gameBoardMatrix[0].length; j++) {
    const column = gameBoardMatrix.map((row) => row[j]);

    const { sign: primarySign } = column[0];
    const isWinningColumn = column.every(
      ({ sign }) => sign && sign === primarySign
    );

    if (isWinningColumn) {
      winningColumn = column;
      break;
    }
  }

  return winningColumn;
}

function getMatrixWinningCellsBySlant() {
  const { slant1, slant2 } = getMatrixSlants(gameBoardMatrix);

  const { sign: primarySign1 } = slant1[0];
  const isSlant1Winning = slant1.every(
    ({ sign }) => sign && sign === primarySign1
  );

  const { sign: primarySign2 } = slant2[0];
  const isSlant2Winning = slant2.every(
    ({ sign }) => sign && sign === primarySign2
  );

  return (isSlant1Winning && slant1) || (isSlant2Winning && slant2);
}

const getWinningCells = () => {
  return (
    getMatrixWinningCellsByRow() ||
    getMatrixWinningCellsByColumn() ||
    getMatrixWinningCellsBySlant()
  );
};
