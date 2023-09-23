function getMatrixWinningCellsByRow() {
  for (let i = 0; i < gameBoardMatrix.length; i++) {
    if (
      gameBoardMatrix[i][0].sign !== null &&
      gameBoardMatrix[i][0].sign === gameBoardMatrix[i][1].sign &&
      gameBoardMatrix[i][1].sign === gameBoardMatrix[i][2].sign
    ) {
      return [
        gameBoardMatrix[i][0],
        gameBoardMatrix[i][1],
        gameBoardMatrix[i][2],
      ];
    }
  }
  return false;
}

function getMatrixWinningCellsByColumn() {
  for (let j = 0; j < gameBoardMatrix.length; j++) {
    if (
      gameBoardMatrix[0][j].sign !== null &&
      gameBoardMatrix[0][j].sign === gameBoardMatrix[1][j].sign &&
      gameBoardMatrix[1][j].sign === gameBoardMatrix[2][j].sign
    ) {
      return [
        gameBoardMatrix[0][j],
        gameBoardMatrix[1][j],
        gameBoardMatrix[2][j],
      ];
    }
  }
  return false;
}

function getMatrixWinningCellsBySlant() {
  if (
    gameBoardMatrix[0][0].sign !== null &&
    gameBoardMatrix[0][0].sign === gameBoardMatrix[1][1].sign &&
    gameBoardMatrix[1][1].sign === gameBoardMatrix[2][2].sign
  ) {
    return [
      gameBoardMatrix[0][0],
      gameBoardMatrix[1][1],
      gameBoardMatrix[2][2],
    ];
  }

  if (
    gameBoardMatrix[0][2].sign !== null &&
    gameBoardMatrix[0][2].sign === gameBoardMatrix[1][1].sign &&
    gameBoardMatrix[1][1].sign === gameBoardMatrix[2][0].sign
  ) {
    return [
      gameBoardMatrix[0][2],
      gameBoardMatrix[1][1],
      gameBoardMatrix[2][0],
    ];
  }

  return false;
}

const getAllBoardCells = () => gameBoardMatrix.flat();

const isMatrixEmpty = () => {
  const boardCells = getAllBoardCells();
  return boardCells.every(({ sign }) => sign === null);
};

const isMatrixFull = () => {
  const boardCells = getAllBoardCells();
  return boardCells.every(({ sign }) => sign !== null);
};

const getWinningCells = () => {
  return (
    getMatrixWinningCellsByRow() ||
    getMatrixWinningCellsByColumn() ||
    getMatrixWinningCellsBySlant()
  );
};
