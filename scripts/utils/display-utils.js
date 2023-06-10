function showCurrentTurn() {
    currentTurnDisplay.element.innerText = `Its the turn of ${currentTurn} `;
}

function showPopups(isDraw = false) {
    if (!isDraw) {
        winnerText.element.innerText = `Player ${currentTurn} is the Winner!`;
        winnerPopup.toggleMode('on');
    }

    startGameButton.element.innerText = 'Play-Again';
    startGameButton.toggleMode('on');
}

function hidePopUps() {
    winnerPopup.toggleMode('on', true);
    startGameButton.toggleMode('on', true);
}

function disableEmptyBoardButtons() {
    gameMatrix.flat().forEach((btn) => {
        if (btn.sign === null) btn.disable();
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
        btn.toggleMode('on');
        btn.deleteClass('disabled');

        const isClickable = btn.element.hasAttribute('onClick');
        if (!isClickable) btn.addAttribute({ onclick: `chooseButton(${i})` });
    });
    toggleCurrentSelection();
}
