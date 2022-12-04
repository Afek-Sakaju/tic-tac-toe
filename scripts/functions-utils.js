function hidePopupButtons() {
    const startGameButton = document.getElementById(ELEMENTS_IDS.startButton);
    const winnerContainer = document.getElementById(
        ELEMENTS_IDS.winnerContainer
    );

    addClasses(winnerContainer, 'playing');
    addClasses(startGameButton, 'playing');
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

function highlightWinningButtons(places) {
    places.forEach((place) => {
        const element = document.getElementById(
            ELEMENTS_IDS.actionButton(place)
        );

        element.classList.add('winnerButton');
    });
}

function declareWinner() {
    const winnerContainer = document.getElementById(
        ELEMENTS_IDS.winnerContainer
    );
    const winnerText = document.getElementById(ELEMENTS_IDS.winnerText);
    const sign = turn % 2 ? 'X' : 'O';

    winnerText.innerText = `Player ${sign} is the Winner!`;

    removeClasses(winnerContainer, 'playing');
}

function buttonSound(type, file = 'mp3') {
    if (!isMute || type === 'toggleOff') {
        new Audio(`../assets/sounds/sound-${type}.${file}`).play();
    }
}
