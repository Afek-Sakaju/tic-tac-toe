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

const AB1 = new ActionButton('actionButton1');
const AB2 = new ActionButton('actionButton2');
const AB3 = new ActionButton('actionButton3');
const AB4 = new ActionButton('actionButton4');
const AB5 = new ActionButton('actionButton5');
const AB6 = new ActionButton('actionButton6');
const AB7 = new ActionButton('actionButton7');
const AB8 = new ActionButton('actionButton8');
const AB9 = new ActionButton('actionButton9');

const placeToIndex = {
    // change to smaller function
    // that calculates place easily
    1: { i: 0, j: 0 },
    2: { i: 0, j: 1 },
    3: { i: 0, j: 2 },
    4: { i: 1, j: 0 },
    5: { i: 1, j: 1 },
    6: { i: 1, j: 2 },
    7: { i: 2, j: 0 },
    8: { i: 2, j: 1 },
    9: { i: 2, j: 2 },
};

let gameMatrix = [
    [AB1, AB2, AB3],
    [AB4, AB5, AB6],
    [AB7, AB8, AB9],
];

let turn = 1;
let isFinishedGame = false;
let isMute = false;


const startGameButton = document.getElementById(ELEMENTS_IDS.startButton);
const winnerContainer = document.getElementById(
    ELEMENTS_IDS.winnerContainer
);

addClasses(winnerContainer, 'playing');
addClasses(startGameButton, 'playing');