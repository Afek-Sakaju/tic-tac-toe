const ELEMENTS_IDS = {
    mainTitleContainer: 'mainTitleContainer',
    startButton: 'startButton',
    turnsContainer: 'turnsContainer',
    playerXTurn: 'playerXTurn',
    playerOTurn: 'playerOTurn',
    actionButton: (place) => `actionButton${place}`,
    winnerContainer: 'winnerContainer',
    winnerText: 'winnerText',
};

let gameMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

let turn = 1;
let isFinishedGame = false;
let isMute = false;
