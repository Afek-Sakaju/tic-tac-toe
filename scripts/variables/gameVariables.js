/* eslint-disable prefer-const */
const startGameButton = document.getElementById('start-btn');
const currentTurnStatusDisplay = document.getElementById('turn-status-info');
const toggleMuteButton = document.getElementById('sound-btn');

const gameBoardMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
].map((row) =>
  row.map((num) => {
    const cellElement = document.getElementById(`actionButton${num}`);
    cellElement.addEventListener('click', () => {
      const isDisabled = cellElement.getAttribute('disabled');

      // Subtracting 1 because the matrix calculations are based on index.
      if (!isDisabled) selectBoardCell(num - 1);
    });

    return { cellElement, sign: null };
  })
);

let currentTurn = 'o';
let isGameFinished = true;
let isSoundMuted = false;
