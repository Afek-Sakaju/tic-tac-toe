/* eslint-disable prefer-const */
const startGameButton = new GameElement('start-btn');
const currentTurnStatusDisplay = new GameElement('turn-status-info');
const toggleMuteButton = new GameElement('sound-btn');

const gameBoardMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
].map((row) =>
  row.map((num) => ({
    cellElement: document.getElementById(`actionButton${num}`),
    sign: null,
  }))
);

let currentTurn = 'o';
let isGameFinished = true;
let isSoundMuted = false;
