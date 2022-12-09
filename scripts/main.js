function startGame() {
    turn = 1;
    soundButton.play('start');
    ActionButton.resetAll();
    winnerPopup.turnOff();
    startGameButton.turnOff();
    showCurrentTurn();
    isFinishedGame = false;
}

function chooseButton(place) {
    gameMatrix[placeToI(place)][placeToJ(place)].lock();
    gameMatrix[placeToI(place)][placeToJ(place)].sign = currentSign();

    if (isGameOver()) {
        isFinishedGame = true;
        ActionButton.lockEmptyButtons();
    } else {
        turn++;
        ActionButton.toggleAll();
        showCurrentTurn();
    }
}

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
