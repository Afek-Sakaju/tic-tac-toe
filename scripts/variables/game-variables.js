/* eslint-disable prefer-const */
const startGameButton = document.getElementById('start-btn');
const currentTurnStatusDisplay = document.getElementById('turn-status-info');
const toggleMuteButton = document.getElementById('sound-btn');

const gameBoardMatrix = getInitializedGameBoardMatrix(3, 3);

let currentTurn = 'o';
let isGameFinished = true;
let isSoundMuted = false;
