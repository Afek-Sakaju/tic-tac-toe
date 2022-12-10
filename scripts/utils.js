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
