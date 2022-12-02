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

let turn = 1;
let isFinishedGame = false;
