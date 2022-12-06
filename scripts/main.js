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

const mainGame = new Game([
    [AB1, AB2, AB3],
    [AB4, AB5, AB6],
    [AB7, AB8, AB9],
]);

const startGameButton = new GameElement('startButton');
const winnerContainer = new GameElement('winnerContainer');
const playerOTurn = new GameElement('playerOTurn');
const playerXTurn = new GameElement('playerXTurn');
const soundButton = new SoundButton('soundButton');

function soundClick() {
    soundButton.toggleSound();
}

function startGame() {
    buttonSound('start');
    {
        startGameButton.turnOff();
        winnerContainer.turnOff();
        //hide popup buttons

        ActionButton.resetAll();
        //resetGameButtons

        isFinishedGame = false;
        turn = 1;
    }
    ActionButton.toggleAll();
    {
        //displayCurrentTurn
        if (turn % 2) {
            playerXTurn.turnOff();
            playerOTurn.turnOn();
        } else {
            playerOTurn.turnOff();
            playerXTurn.turnOn();
        }
    }
}

function chooseButton(place) {
    const currentButton = matrix[placeToIndex[place].i][placeToIndex[place].j];
    currentButton.lock();

    updatePlayerChoiceInMatrix(place);
    if (isFinishedGame === true) {
        finishGame();
    } else {
        ActionButton.toggleAll();
        {
            //displayCurrentTurn
            if (turn % 2) {
                playerXTurn.turnOff();
                playerOTurn.turnOn();
            } else {
                playerOTurn.turnOff();
                playerXTurn.turnOn();
            }
        }
    }
}

function restartGame() {
    // restart only allowed after user start playing
    if (turn !== 1) {
        finishGame(true);
        startGame();
    }
}
