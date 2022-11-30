function startGame() {
    displayCurrentTurn();
    hideStartButton();
    activateGameButtons();
    changeButtonsToCurrentTurn();
}

function chooseButton(place) {
    lockButtonFromAction(ELEMENTS_IDS.actionButton(place));
    updateGameCoundition(place);
    changeTurn();
    changeButtonsToCurrentTurn();
    displayCurrentTurn();
}
