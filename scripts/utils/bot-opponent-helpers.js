const getEmptyCellIdFromArray = (arr) => {
  const emptyCellId = arr?.find(({ sign }) => !sign)?.id;
  return emptyCellId;
};

// An "almost uniform" array is one in which all cells have the same sign except for one.
const getAlmostUniformSignsStatus = (arr) => {
  const almostUniformStatus = {};
  const primarySign = arr?.find(({ sign }) => sign)?.sign;

  const sameSignCount =
    arr?.reduce((count, { sign }) => {
      return sign === primarySign ? count + 1 : count;
    }, 0) ?? 0;

  almostUniformStatus.isAlmostUniform = sameSignCount === arr.length - 1;
  almostUniformStatus.primarySign = primarySign;
  return almostUniformStatus;
};

const getBestMoveInArray = (arr, currentTurnSign) => {
  const bestMoveStatus = {};
  const { isAlmostUniform, primarySign } = getAlmostUniformSignsStatus(arr);
  if (!isAlmostUniform) return {};

  bestMoveStatus.bestMoveCellId = getEmptyCellIdFromArray(arr);
  bestMoveStatus.isWinningMove = primarySign === currentTurnSign;
  return bestMoveStatus;
};

const getBestMoveByRow = () => {
  const bestMovesByRow = { lossPreventingMoves: [], winningMoves: [] };

  gameBoardMatrix.forEach((row) => {
    const { bestMoveCellId, isWinningMove } = getBestMoveInArray(
      row,
      currentTurnSign
    );
    if (!bestMoveCellId) return;

    if (isWinningMove) bestMovesByRow.winningMoves.push(bestMoveCellId);
    else bestMovesByRow.lossPreventingMoves.push(bestMoveCellId);
  });

  return bestMovesByRow;
};

const getBestMoveByColumn = () => {
  const bestMovesByColumn = { lossPreventingMoves: [], winningMoves: [] };

  for (let j = 0; j < gameBoardMatrix[0].length; j++) {
    const column = gameBoardMatrix.map((row) => row[j]);

    const { bestMoveCellId, isWinningMove } = getBestMoveInArray(
      column,
      currentTurnSign
    );
    if (bestMoveCellId) {
      if (isWinningMove) bestMovesByColumn.winningMoves.push(bestMoveCellId);
      else bestMovesByColumn.lossPreventingMoves.push(bestMoveCellId);
    }
  }

  return bestMovesByColumn;
};

const getBestMoveBySlant = () => {
  const bestMovesBySlant = { lossPreventingMoves: [], winningMoves: [] };
  const slantsInMatrixResult = getMatrixSlants(gameBoardMatrix);
  const slants = Object.values(slantsInMatrixResult);

  slants?.forEach((slant) => {
    const { bestMoveCellId, isWinningMove } = getBestMoveInArray(
      slant,
      currentTurnSign
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
  const bestMovesByRow = getBestMoveByRow();
  const bestMovesByColumn = getBestMoveByColumn();
  const bestMovesBySlant = getBestMoveBySlant();

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

executeBotLogicIfItsTurn = () => {
  const isTurnOfBot = isCurrentBotTurn();
  if (!isTurnOfBot) return;

  toggleBoardCellSelectionDisabled();

  const bestBotMove = getBotBestMove();
  setTimeout(() => {
    selectBoardCell(bestBotMove);
    toggleBoardCellSelectionDisabled();
  }, 2000);
};
