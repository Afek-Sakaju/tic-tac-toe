function processGameCondition() {
    const gameCondition = getGameCondition();

    switch (gameCondition) {
        case 2:
            isFinishedGame = true;
            playSound('win');
            showPopups();
            displayWinningButtons();
            break;
        case 1:
            isFinishedGame = true;
            playSound('fullBoard');
            showPopups();
            break;
        default:
            playSound('action');
    }
}

function showCurrentTurn() {
    currentTurnDisplay.element.innerText = `The turn of ${currentTurn} `;
}

function showPopups() {
    startGameButton.element.innerText = 'Play-Again';
    startGameButton.toggleMode('off', true);
}

function hidePopUps() {
    startGameButton.toggleMode('off');
}

function disableEmptyBoardButtons() {
    const boardButtons = getAllBoardButtons();
    boardButtons
        .filter((btn) => btn.sign === null)
        .forEach((btn) => {
            btn.toggleMode('off');
            btn.disable();
        });
}

function toggleCurrentSelection() {
    const classes = {
        add: currentTurn === 'O' ? 'player-1' : 'player-2',
        remove: currentTurn === 'O' ? 'player-2' : 'player-1',
    };

    const boardButtons = getAllBoardButtons();
    boardButtons.forEach((btn) => {
        const isNotDisabled = !btn.element.classList.contains('disabled');

        if (isFinishedGame || isNotDisabled) {
            btn.deleteClass([
                'empty-logo',
                'disabled',
                'winner-button',
                classes.remove,
            ]);

            btn.addClass(classes.add);
        }
    });
}

function resetAllBoardButtons() {
    const boardButtons = getAllBoardButtons();

    boardButtons.forEach((btn, i) => {
        btn.toggleMode('off', true);
        btn.toggleMode('disabled', true);
        btn.sign = null;

        const dontHaveOnClick = !btn.element.hasAttribute('onClick');
        if (dontHaveOnClick) btn.addAttribute({ onclick: `pickButton(${i})` });
    });
    toggleCurrentSelection();
}

function toggleSound() {
    const toggleMode = isSoundMuted ? 'on' : 'off';

    playSound(toggleMode);
    isSoundMuted = !isSoundMuted;
    soundButton.deleteAttribute('src');
    soundButton.addAttribute({
        src: `./assets/pictures/toggle-sound-${toggleMode}.png`,
    });
}

const displayWinningButtons = (buttons) => {
    const winningBoardButtons = getWinnerButtons();
    winningBoardButtons.forEach((btn) => btn.toggleMode('winner'));
};
