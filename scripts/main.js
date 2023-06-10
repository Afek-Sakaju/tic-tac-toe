function startGame() {
    isFinishedGame = false;
    playSound('start');
    swapTurn();
    resetAllBoardButtons();
    hidePopUps();
    showCurrentTurn();
}

function restartGame() {
    const boardButtons = getAllBoardButtons();
    const matrixNotEmpty = boardButtons.some((e) => e.sign !== null);
    if (matrixNotEmpty) startGame();
}

function pickButton(position) {
    const boardButtons = getAllBoardButtons();
    const isGameNotStarted = boardButtons.some((btn) =>
        btn.element.classList.contains('empty-logo')
    );
    if (isGameNotStarted) return;

    boardButtons[position].disable();
    boardButtons[position].sign = currentTurn;

    processGameCondition();
    if (isFinishedGame) disableEmptyBoardButtons();
    else {
        swapTurn();
        toggleCurrentSelection();
        showCurrentTurn();
    }
}
