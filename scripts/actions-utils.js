function displayCurrentTurn() {
    const playerOTurn = document.getElementById(ELEMENTS_IDS.playerOTurn);
    const playerXTurn = document.getElementById(ELEMENTS_IDS.playerXTurn);

    if (turn === 0) {
        playerOTurn.classList.add('myTurn');
        playerXTurn.classList.remove('myTurn');
    } else {
        playerXTurn.classList.add('myTurn');
        playerOTurn.classList.remove('myTurn');
    }
}

function hideStartButton() {
    const startGameButton = document.getElementById(ELEMENTS_IDS.startButton);
    startGameButton.classList.add(playing);
}

function activateGameButtons() {
    const buttonsElements = document.querySelectorAll('.actionButton');
    buttonsElements.forEach((e) => e.classList.add(playing));
}

function changeButtonsToCurrentTurn() {
    const classToAdd = !turn ? 'buttonO' : 'buttonX';
    const classToRemove = !turn ? 'buttonX' : 'buttonO';

    const buttonsElements = document.querySelectorAll('.actionButton');

    buttonsElements.forEach((e) => {
        if (!e.classList.contains('locked')) {
            e.classList.remove('defaultLogo');
            e.classList.remove(classToRemove);
            e.classList.add(classToAdd);
        }
    });
}

function lockButtonFromAction(id) {
    const element = document.getElementById(id);

    element.classList.add('locked');
    element.removeAttribute('onclick');
}
