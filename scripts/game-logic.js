function updatePlayerChoiceInMatrix(place) {
    /*const i = (place - 1) % 3;
    let j;

    switch (true) {
        case place <= 3:
            j = 0;
            break;
        case place <= 6:
            j = 1;
            break;
        default:
            j = 2;
    }
    gameMatrix[j][i].sign = turn % 2 ? 0 : 1;*/

    gameMatrix[placeToIndex[place].i][placeToIndex[place].j] = turn % 2 ? 0 : 1;

    turn++;

    isFinishedGame = isGameOver();
}

function isGameOver() {
    if (isWinnerByRow() || isWinnerByColumn() || isWinnerBySlant()) {
        soundButton.play('win');
        declareWinner();
        return true;
    } else if (turn < 10) {
        soundButton.play('action');
        return false;
    }

    soundButton.play('fullBoard');
    return true;
}
