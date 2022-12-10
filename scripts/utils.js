function placeToI(place) {
    switch (true) {
        case place <= 3:
            return 0;
        case place <= 6:
            return 1;
        default:
            return 2;
    }
}

function placeToJ(place) {
    return (place - 1) % 3;
}

function showCurrentTurn() {
    if (currentTurn === 'O') {
        playerOTurn.turnOn();
        playerXTurn.turnOff();
    } else {
        playerOTurn.turnOff();
        playerXTurn.turnOn();
    }
}

function swapTurn() {
    currentTurn = currentTurn === 'O' ? 'X' : 'O';
}

function showPopups(isDraw = false) {
    if (!isDraw) {
        winnerText.element.innerText = `Player ${currentTurn} is the Winner!`;
        winnerPopup.turnOn();
    }

    startGameButton.element.innerText = 'Play-Again';
    startGameButton.turnOn();
}
