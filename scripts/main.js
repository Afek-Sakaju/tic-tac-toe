function startGame() {
    displayCurrentTurn();
    changeButtonsToCurrentTurn();
    resetGame();
}

function chooseButton(place) {
    lockButtonFromAction(ELEMENTS_IDS.actionButton(place));
    updateGameCoundition(place);
    if (isFinishedGame === true) {
        finishGame();
    } else {
        changeTurn();
        changeButtonsToCurrentTurn();
        displayCurrentTurn();
    }
}
