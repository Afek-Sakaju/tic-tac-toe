const ELEMENTS_IDS = {
    mainTitleContainer: 'mainTitleContainer',
    startButton: 'startButton',
    turnsContainer: 'turnsContainer',
    playerXTurn: 'playerXTurn',
    playerOTurn: 'playerOTurn',
    actionButton: (place) => `actionButton${place}`,
};

let gameMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

let turn = 0;
let winner = null;
let isFinishedGame = false;
