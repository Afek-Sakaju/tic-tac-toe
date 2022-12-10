const AB1 = new ActionButton('actionButton1');
const AB2 = new ActionButton('actionButton2');
const AB3 = new ActionButton('actionButton3');
const AB4 = new ActionButton('actionButton4');
const AB5 = new ActionButton('actionButton5');
const AB6 = new ActionButton('actionButton6');
const AB7 = new ActionButton('actionButton7');
const AB8 = new ActionButton('actionButton8');
const AB9 = new ActionButton('actionButton9');

const gameMatrix = [
    [AB1, AB2, AB3],
    [AB4, AB5, AB6],
    [AB7, AB8, AB9],
];

const soundButton = new SoundButton('soundButton');
const startGameButton = new GameElement('startButton');
const winnerPopup = new GameElement('winnerContainer');
const winnerText = new GameElement('winnerText');
const playerOTurn = new GameElement('playerOTurn');
const playerXTurn = new GameElement('playerXTurn');

let currentTurn = 'O';
let isFinishedGame = true;
