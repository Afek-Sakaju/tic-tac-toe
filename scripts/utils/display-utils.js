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

function disableEmptyBoardButtons() {
    gameMatrix.flat().forEach((btn) => {
        if (btn.sign === null) btn.toggleMode(disabled);
    });
}

function toggleCurrentSelection() {
    const classes = {
        add: currentTurn === 'O' ? 'player-1' : 'player-2',
        remove: currentTurn === 'O' ? 'player-2' : 'player-1',
    };

    const allButtons = getAllBoardButtons();
    allButtons.forEach((button) => {
        const isLocked = button.element.classList.contains('disabled');

        if (!isLocked || isFinishedGame) {
            button.deleteClass([
                'empty-logo',
                'disabled',
                'winner-button',
                classes.remove,
            ]);

            button.addClass(classes.add);
        }
    });
}

function resetAllBoardButtons() {
    const allButtons = getAllBoardButtons();

    allButtons.forEach((btn, i) => {
        btn.sign = null;
        btn.turnOn();
        btn.deleteClass('disabled');

        const isClickable = btn.element.hasAttribute('onClick');
        if (!isClickable) btn.addAttribute({ onclick: `chooseButton(${i})` });
    });
    toggleCurrentSelection();
}
