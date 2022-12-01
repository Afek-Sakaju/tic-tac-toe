function hideStartButton() {
    const startGameButton = document.getElementById(ELEMENTS_IDS.startButton);
    modifyClasses(startGameButton, { classesToAdd: ['playing'] });
}

function activateGameButtons() {
    const buttonsElements = document.querySelectorAll('.actionButton');

    buttonsElements.forEach((element) => {
        if (isFinishedGame) {
            clearLockedGameButtons(element);
        }

        resetGameButtons(element);
    });
}

function lockEmptyButtons() {
    const emptyButtons = document.querySelectorAll('[name="empty"]');

    emptyButtons.forEach((element) => {
        lockButtonFromAction(element.id);
    });
}

function showPlayAgainButton() {
    const startGameButton = document.getElementById(ELEMENTS_IDS.startButton);

    startGameButton.innerText = 'Play-Again';
    modifyClasses(startGameButton, { classesToRemove: ['playing'] });
}
