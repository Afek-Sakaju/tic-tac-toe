function changeButtonsToCurrentTurn() {
    const classToAdd = turn % 2 ? 'buttonO' : 'buttonX';
    const classToRemove = turn % 2 ? 'buttonX' : 'buttonO';
    //in class
    const buttonsElements = document.querySelectorAll('.actionButton');

    buttonsElements.forEach((element) => {
        if (!element.classList.contains('locked') || isFinishedGame) {
            removeClasses(element, [
                'defaultLogo',
                classToRemove,
                'locked',
                'winnerButton',
            ]);

            addClasses(element, classToAdd);
        }
    });
}

function resetGame() {
    {
        startGameButton.turnOff();
        winnerContainer.turnOff();
        //hide popup buttons
    }
    {
        ActionButton.resetAll();
        //resetGameButtons
    }
    isFinishedGame = false;
    turn = 1;
}

function lockButtonFromAction(id) {
    //in class
    const element = document.getElementById(id);

    addClasses(element, 'locked');
    removeAttributes(element, ['onclick', 'name']);

    if (isFinishedGame) addClasses(element, 'gameOver');
}

function finishGame(hidePopupButton = false) {
    lockEmptyButtons();
    if (!hidePopupButton) showPlayAgainButton();
    resetGameMatrix();
}
