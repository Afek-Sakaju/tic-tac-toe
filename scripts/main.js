function startGame() {
    currentTurn = 'O';
    soundButton.play('start');
    ActionButton.resetAll();
    winnerPopup.turnOff();
    startGameButton.turnOff();
    showCurrentTurn();
    isFinishedGame = false;
}

//todo change gamelogic from counting turns to compare matrix

function restartGame() {
    const matrixNotEmpty = gameMatrix.flat().some((e) => e.sign !== null);
    // restart allowed after only after started game
    if (matrixNotEmpty) {
        startGame();
    }
}

function chooseButton(position) {
    gameMatrix.flat()[position].lock();
    gameMatrix.flat()[position].sign = currentTurn;

    if (isGameOver()) {
        isFinishedGame = true;
        ActionButton.lockEmptyButtons();
    } else {
        swapTurn();
        ActionButton.toggleAll();
        showCurrentTurn();
    }
}
