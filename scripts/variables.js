const ELEMENTS_IDS = {
    mainTitleContainer: 'mainTitleContainer',
    startButton: 'startButton',
    turnsContainer: 'turnsContainer',
    playerXTurn: 'playerXTurn',
    playerOTurn: 'playerOTurn',
    actionButton: (place) => `actionButton${place}`,
    winnerContainer: 'winnerContainer',
    winnerText: 'winnerText',
    soundButton: 'soundButton',
};

const ab1 = new ActionButton();

let gameMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

let turn = 1;
let isFinishedGame = false;
let isMute = false;
