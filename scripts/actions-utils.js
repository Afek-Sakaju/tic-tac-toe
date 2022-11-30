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
    const classToAdd = turn === 0 ? 'buttonO' : 'buttonX';

    const buttonsElements = document.querySelectorAll('.actionButton');

    buttonsElements.forEach((e) => {
        e.classList.remove('defaultLogo');
        e.classList.add(classToAdd);
    });
}
