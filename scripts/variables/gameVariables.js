/* eslint-disable prefer-const */
const startGameButton = new GameElement('start-button');
const currentTurnDisplay = new GameElement('turn-display');
const soundButton = new GameElement('sound-button');

const gameMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
].map((row) => row.map((num) => new ActionButton(`actionButton${num}`)));

let currentTurn = 'O';
let isFinishedGame = true;
let isSoundMuted = false;
