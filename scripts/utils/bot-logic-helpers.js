const getLossPreventingCellsByRow = (oppositeTurn) => {
  const lossPreventingCellsByRow = [];

  gameBoardMatrix.forEach((row) => {
    const countOppositeSignInRow = row.reduce((count, { sign }) => {
      return sign === oppositeTurn ? count + 1 : count;
    }, 0);

    const isRowAlmostLost = countOppositeSignInRow === row.length - 1;
    if (isRowAlmostLost) {
      const lossPreventingCellId = row?.find(({ sign }) => !sign)?.id;
      if (lossPreventingCellId) {
        lossPreventingCellsByRow.push(lossPreventingCellId);
      }
    }
  });

  return lossPreventingCellsByRow;
};

const getLossPreventingCellsByCol = (oppositeTurn) => {
  const lossPreventingCellsByCol = [];

  for (let j = 0; j < gameBoardMatrix[0].length; j++) {
    const column = gameBoardMatrix.map((row) => row[j]);

    const countOppositeSignInColumn = column.reduce((count, { sign }) => {
      return sign === oppositeTurn ? count + 1 : count;
    }, 0);

    const isColumnAlmostLost = countOppositeSignInColumn === column.length - 1;
    if (isColumnAlmostLost) {
      const lossPreventingCellId = column?.find(({ sign }) => !sign)?.id;
      if (lossPreventingCellId) {
        lossPreventingCellsByCol.push(lossPreventingCellId);
      }
    }
  }

  return lossPreventingCellsByCol;
};

const getLossPreventingCellsBySlant = (oppositeTurn) => {
  const lossPreventingCellsBySlant = [];
  const { slant1, slant2 } = getMatrixSlants(gameBoardMatrix);

  const slants = [slant1, slant2];
  slants.forEach((slant) => {
    const countOppositeSignInSlant = slant.reduce((count, { sign }) => {
      return sign === oppositeTurn ? count + 1 : count;
    }, 0);

    const isSlantAlmostLost = countOppositeSignInSlant === slant.length - 1;
    if (isSlantAlmostLost) {
      const lossPreventingCellId = slant?.find(({ sign }) => !sign)?.id;
      if (lossPreventingCellId) {
        lossPreventingCellsBySlant.push(lossPreventingCellId);
      }
    }
  });

  return lossPreventingCellsBySlant;
};

const getLossPreventingMoves = () => {
  const oppositeTurn = currentTurn === 'o' ? 'x' : 'o';
  const lossPreventingCellsByRow = getLossPreventingCellsByRow(oppositeTurn);
  const lossPreventingCellsByCol = getLossPreventingCellsByCol(oppositeTurn);
  const lossPreventingCellsBySlant =
    getLossPreventingCellsBySlant(oppositeTurn);

  const lossPreventingCellsIds = [
    ...lossPreventingCellsByRow,
    ...lossPreventingCellsByCol,
    ...lossPreventingCellsBySlant,
  ];

  return lossPreventingCellsIds;
};

function getBotBestMove() {
  return getLossPreventingMoves();
}
