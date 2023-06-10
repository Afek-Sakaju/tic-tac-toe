function startGame() {
    swapTurn();
    playSound('start');
    resetAllBoardButtons();
    hidePopUps();
    showCurrentTurn();
    isFinishedGame = false;
}

function restartGame() {
    const boardButtons = getAllBoardButtons();
    const matrixNotEmpty = boardButtons.some((e) => e.sign !== null);
    if (matrixNotEmpty) startGame();
}

function chooseButton(position) {
    const boardButtons = getAllBoardButtons();
    const defaultLogoExists = boardButtons.some((button) =>
        button.element.classList.contains('empty-logo')
    );

    if (defaultLogoExists) return;

    boardButtons[position].disable();
    boardButtons[position].sign = currentTurn;

    if (isGameOver()) {
        isFinishedGame = true;
        disableEmptyBoardButtons();
    } else {
        swapTurn();
        toggleCurrentSelection();
        showCurrentTurn();
    }
}
