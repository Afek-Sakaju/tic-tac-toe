function startGame() {
    turn = 1;
    soundButton.play('start');
    ActionButton.resetAll();
    winnerPopup.turnOff();
    startGameButton.turnOff();
    showCurrentTurn();
    isFinishedGame = false;
}

//todo change gamelogic from counting turns to compare matrix

function restartGame() {
    // restart allowed after only after started game
    if (turn > 1) {
        startGame();
    }
}

function chooseButton(event, position) {
    gameMatrix[placeToI(place)][placeToJ(place)].lock();
    gameMatrix[placeToI(place)][placeToJ(place)].sign = currentSign();

    if (isGameOver()) {
        isFinishedGame = true;
        ActionButton.lockEmptyButtons();
    } else {
        turn++;
        ActionButton.toggleAll();
        showCurrentTurn();
    }
}
