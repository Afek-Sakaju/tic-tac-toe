const getEmptyCellIdFromArray = (arr) => {
  const emptyCellId = arr?.find(({ sign }) => !sign)?.id;
  return emptyCellId;
};

// An "almost uniform" array is one in which all cells have the same sign except for one.
const getAlmostUniformSignsStatus = (arr) => {
  const primarySign = arr?.find(({ sign }) => sign)?.sign;
  if (!primarySign) return {};

  const sameSignCount = arr?.reduce((count, { sign }) => {
    return sign === primarySign ? count + 1 : count;
  }, 0);

  const isAlmostUniformArr = sameSignCount === arr.length - 1;
  // eslint-disable-next-line consistent-return
  return { isAlmostUniformArr, primarySign };
};

const getBestMoveInArray = (arr, oppositeTurn) => {
  const { isAlmostUniformArr, primarySign } = getAlmostUniformSignsStatus(arr);
  if (!isAlmostUniformArr) return {};

  const bestMoveCellId = getEmptyCellIdFromArray(arr);
  const isWinningMove = primarySign === oppositeTurn;
  // eslint-disable-next-line consistent-return
  return { bestMoveCellId, isWinningMove };
};

const getBestMoveByRow = (oppositeTurn) => {
  const bestMovesByRow = { lossPreventingMoves: [], winningMoves: [] };

  gameBoardMatrix.forEach((row) => {
    const { bestMoveCellId, isWinningMove } = getBestMoveInArray(
      row,
      oppositeTurn
    );
    if (!bestMoveCellId) return;

    if (isWinningMove) bestMovesByRow.winningMoves.push(bestMoveCellId);
    else bestMovesByRow.lossPreventingMoves.push(bestMoveCellId);
  });

  return bestMovesByRow;
};

const getBestMoveByColumn = (oppositeTurn) => {
  const bestMovesByColumn = { lossPreventingMoves: [], winningMoves: [] };

  for (let j = 0; j < gameBoardMatrix[0].length; j++) {
    const column = gameBoardMatrix.map((row) => row[j]);

    const { bestMoveCellId, isWinningMove } = getBestMoveInArray(
      column,
      oppositeTurn
    );
    if (bestMoveCellId) {
      if (isWinningMove) bestMovesByColumn.winningMoves.push(bestMoveCellId);
      else bestMovesByColumn.lossPreventingMoves.push(bestMoveCellId);
    }
  }

  return bestMovesByColumn;
};

const getBestMoveBySlant = (oppositeTurn) => {
  const bestMovesBySlant = { lossPreventingMoves: [], winningMoves: [] };
  const slantsInMatrixResult = getMatrixSlants(gameBoardMatrix);
  const slants = Object.values(slantsInMatrixResult);

  slants?.forEach((slant) => {
    const { bestMoveCellId, isWinningMove } = getBestMoveInArray(
      slant,
      oppositeTurn
    );
    if (!bestMoveCellId) return;

    if (isWinningMove) bestMovesBySlant.winningMoves.push(bestMoveCellId);
    else bestMovesBySlant.lossPreventingMoves.push(bestMoveCellId);
  });

  return bestMovesBySlant;
};

const pickRandomFromArray = (arr) => {
  if (!arr.length) return null;

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getRandomMove = () => {
  const boardCells = gameBoardMatrix.flat();
  const emptyBoardCells = boardCells.filter((cell) => !cell.sign);

  const randomMoveCellId = pickRandomFromArray(emptyBoardCells)?.id;
  return randomMoveCellId;
};

const getBotBestMove = () => {
  const oppositeTurn = getOppositeTurn();
  const bestMovesByRow = getBestMoveByRow(oppositeTurn);
  const bestMovesByColumn = getBestMoveByColumn(oppositeTurn);
  const bestMovesBySlant = getBestMoveBySlant(oppositeTurn);

  const bestWinningMoves = [
    ...bestMovesByRow.winningMoves,
    ...bestMovesByColumn.winningMoves,
    ...bestMovesBySlant.winningMoves,
  ];

  const bestLossPreventingMoves = [
    ...bestMovesByRow.lossPreventingMoves,
    ...bestMovesByColumn.lossPreventingMoves,
    ...bestMovesBySlant.lossPreventingMoves,
  ];

  switch (true) {
    case bestWinningMoves.length > 0:
      bestMove = pickRandomFromArray(bestWinningMoves);
      break;
    case bestLossPreventingMoves.length > 0:
      bestMove = pickRandomFromArray(bestLossPreventingMoves);
      break;
    default:
      bestMove = getRandomMove();
  }

  return bestMove;
};

const playBotMove = () => {
  const bestMove = getBotBestMove();
  setTimeout(() => selectBoardCell(bestMove - 1), 2000);
};

executeBotMoveIfItsTurn = () => {
  const isTurnOfBot = currentTurn === 'o';
  if (isTurnOfBot) playBotMove();
};
