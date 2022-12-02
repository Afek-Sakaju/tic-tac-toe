function hideStartButton() {
    const startGameButton = document.getElementById(ELEMENTS_IDS.startButton);
    addClasses(startGameButton, ['playing']);
}

function resetGameButtons() {
    const buttonsElements = document.querySelectorAll('.actionButton');

    buttonsElements.forEach((element) => {
        resetButton(element);
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

    removeClasses(startGameButton, 'playing');
}

function resetButton(element) {
    removeClasses(element, ['locked', 'gameOver', 'buttonX']);

    addClasses(element, 'buttonO');

    addAttributes(element, [
        { onclick: `chooseButton(${element.id[12]})` },
        { name: 'empty' },
    ]);

    addClasses(element, 'playing');
}
