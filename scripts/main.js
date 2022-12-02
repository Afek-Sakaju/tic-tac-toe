// todo design bigger page
// todo more gap between h1 and gameBoard
// todo highlight winning row

function startGame() {
    buttonSound('start');
    resetGame();
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
