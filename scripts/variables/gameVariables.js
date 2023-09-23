/* eslint-disable prefer-const */
const startGameButton = document.getElementById('start-btn');
const currentTurnStatusDisplay = document.getElementById('turn-status-info');
const toggleMuteButton = document.getElementById('sound-btn');

const gameBoardMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
].map((row) => row.map((num) => getInitializedBoardCell(num)));

let currentTurn = 'o';
let isGameFinished = true;
let isSoundMuted = false;
