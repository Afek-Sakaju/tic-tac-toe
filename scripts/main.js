function startGame() {
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
