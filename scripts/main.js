function startGame() {
    soundButton.play('start');
    ActionButton.resetAll();
    winnerPopup.turnOff();
    startGameButton.turnOff();
    showCurrentTurn();
}

/* function startGame() {
    buttonSound('start');
    resetGame();
    changeButtonsToCurrentTurn();
    displayCurrentTurn();
} */

function chooseButton(place) {
    gameMatrix[placeToI(place)][placeToJ(place)].lock();
    gameMatrix[placeToI(place)][placeToJ(place)].sign = turn % 2 ? 0 : 1;

    turn++;

    //updatePlayerChoiceInMatrix(place);
    if (isGameOver()) {
        isFinishedGame = true;
    } else {
        ActionButton.toggleAll();
        showCurrentTurn();
    }
}

/* function chooseButton(place) {
    gameMatrix[placeToIndex[place].i][placeToIndex[place].j].lock();
    //lockButtonFromAction(ELEMENTS_IDS.actionButton(place));
    updatePlayerChoiceInMatrix(place);
    
    if (isFinishedGame === true) {
        finishGame();
    } else {
        changeButtonsToCurrentTurn();
        displayCurrentTurn();
    }
} */

/* function restartGame() {
    // restart only allowed after user start playing
    if (turn !== 1) {
        finishGame(true);
        startGame();
    }
}*/

/* function toggleSound() {
    const soundButton = document.getElementById(ELEMENTS_IDS.soundButton);

    if (!isMute) {
        isMute = true;
        buttonSound('toggleOff');
        removeAttributes(soundButton, 'src');
        addAttributes(soundButton, { src: './assets/toggle-sound-off.png' });
    } else {
        isMute = false;
        buttonSound('toggleOn');
        removeAttributes(soundButton, 'src');
        addAttributes(soundButton, { src: './assets/toggle-sound-on.png' });
    }
} */
