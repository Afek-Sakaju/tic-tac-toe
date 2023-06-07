function showCurrentTurn() {
    currentTurnDisplay.element.innerText = `Its the turn of ${currentTurn} `;
}

function showPopups(isDraw = false) {
    if (!isDraw) {
        winnerText.element.innerText = `Player ${currentTurn} is the Winner!`;
        winnerPopup.turnOn();
    }

    startGameButton.element.innerText = 'Play-Again';
    startGameButton.turnOn();
}

function hidePopUps() {
    winnerPopup.turnOff();
    startGameButton.turnOff();
}

function disableEmptyButtons() {
    gameMatrix.flat().forEach((btn) => {
        if (btn.sign === null) btn.disable();
    });
}
