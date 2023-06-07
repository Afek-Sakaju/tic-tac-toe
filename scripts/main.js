function startGame() {
    swapTurn();
    soundButton.play('start');
    ActionButton.resetAll();
    hidePopUps();
    showCurrentTurn();
    isFinishedGame = false;
}

function restartGame() {
    const matrixNotEmpty = gameMatrix.flat().some((e) => e.sign !== null);

    if (matrixNotEmpty) startGame();
}

function chooseButton(position) {
    const defaultLogoExists = gameMatrix
        .flat()
        .some((button) => button.element.classList.contains('empty-logo'));

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
