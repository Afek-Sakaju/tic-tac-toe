function startGame() {
    currentTurn = 'O';
    soundButton.play('start');
    ActionButton.resetAll();
    winnerPopup.turnOff();
    startGameButton.turnOff();
    showCurrentTurn();
    isFinishedGame = false;
}

function restartGame() {
    const matrixNotEmpty = gameMatrix.flat().some((e) => e.sign !== null);
    // restart allowed after only after started game
    if (matrixNotEmpty) {
        startGame();
    }
}

function chooseButton(position) {
    const defaultLogoExists = gameMatrix
        .flat()
        .some((button) => button.element.classList.contains('default-logo'));

    if (defaultLogoExists) return;

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
