function displayCurrentTurn() {
    if (isFinishedGame) turn = 0;

    const playerOTurn = document.getElementById(ELEMENTS_IDS.playerOTurn);
    const playerXTurn = document.getElementById(ELEMENTS_IDS.playerXTurn);

    if (!turn) {
        modifyClasses(playerOTurn, { classesToAdd: 'myTurn' });
        modifyClasses(playerXTurn, { classesToRemove: 'myTurn' });
    } else {
        modifyClasses(playerXTurn, { classesToAdd: 'myTurn' });
        modifyClasses(playerOTurn, { classesToRemove: 'myTurn' });
    }
}

function changeButtonsToCurrentTurn() {
    const classToAdd = !turn ? 'buttonO' : 'buttonX';
    const classToRemove = !turn ? 'buttonX' : 'buttonO';

    const buttonsElements = document.querySelectorAll('.actionButton');

    buttonsElements.forEach((element) => {
        if (!element.classList.contains('locked')) {
            modifyClasses(element, {
                classesToRemove: ['defaultLogo', classToRemove],
                classesToAdd: [classToAdd],
            });
        }
    });
}

function resetGame() {
    hideStartButton();
    activateGameButtons();
}

function lockButtonFromAction(id) {
    const element = document.getElementById(id);

    modifyClasses(element, { classesToAdd: ['locked'] });
    modifyAttributes(element, { attributesToRemove: ['onclick', 'name'] });
    if (isFinishedGame) modifyClasses(element, { classesToAdd: ['gameOver'] });
}

function finishGame() {
    lockEmptyButtons();
    showPlayAgainButton();
    resetGameMatrix(); // show winning buttons
    // declare winner
    /* show play again pop up by
          changing start playing text */
}
