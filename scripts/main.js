{
    const AB1 = new ActionButton('actionButton1');
    const AB2 = new ActionButton('actionButton2');
    const AB3 = new ActionButton('actionButton3');
    const AB4 = new ActionButton('actionButton4');
    const AB5 = new ActionButton('actionButton5');
    const AB6 = new ActionButton('actionButton6');
    const AB7 = new ActionButton('actionButton7');
    const AB8 = new ActionButton('actionButton8');
    const AB9 = new ActionButton('actionButton9');
}
const thisGame = new Game([
    [AB1, AB2, AB3],
    [AB4, AB5, AB6],
    [AB7, AB8, AB9],
]);

const startGameButton = new GameElement('startButton');
const winnerContainer = new GameElement('winnerContainer');

function startGame() {
    buttonSound('start');
    {
        {
            startGameButton.turnOff();
            winnerContainer.turnOff();
            //hide popup buttons
        }
        resetGameButtons();
        isFinishedGame = false;
        turn = 1;
    }
    changeButtonsToCurrentTurn();
    displayCurrentTurn();
}

function chooseButton(place) {
    lockButtonFromAction(ELEMENTS_IDS.actionButton(place));
    updatePlayerChoiceInMatrix(place);
    if (isFinishedGame === true) {
        finishGame();
    } else {
        changeButtonsToCurrentTurn();
        displayCurrentTurn();
    }
}

function restartGame() {
    // restart only allowed after user start playing
    if (turn !== 1) {
        finishGame(true);
        startGame();
    }
}

function toggleSound() {
    const soundButton = document.getElementById(ELEMENTS_IDS.soundButton);

    if (!isMute) {
        isMute = true;
        buttonSound('toggleOff');
        removeAttributes(soundButton, 'src');
        addAttributes(soundButton, {
            src: './assets/pictures/toggle-sound-off.png',
        });
    } else {
        isMute = false;
        buttonSound('toggleOn');
        removeAttributes(soundButton, 'src');
        addAttributes(soundButton, {
            src: './assets/pictures/toggle-sound-on.png',
        });
    }
}
