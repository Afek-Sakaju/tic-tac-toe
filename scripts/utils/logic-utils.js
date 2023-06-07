function swapTurn() {
    currentTurn = currentTurn === 'O' ? 'X' : 'O';
}

function hidePopUps() {
    winnerPopup.turnOff();
    startGameButton.turnOff();
}
