function resetGameMatrix() {
    ActionButton.resetAll();
    /* gameMatrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]; */
}

function winningRowCalc() {
    for (let i = 0; i < gameMatrix.length; i++) {
        if (
            gameMatrix[i][0].sign !== null &&
            gameMatrix[i][0].sign === gameMatrix[i][1].sign &&
            gameMatrix[i][1].sign === gameMatrix[i][2].sign
        ) {
            return i;
        }
    }
    return false;
}

function isWinnerByRow() {
    const result = winningRowCalc();
    if (result !== false) {
        highlightWinningButtons([
            1 + result * 3,
            2 + result * 3,
            3 + result * 3,
        ]);
        return true;
    } else return false;
}

function winningColumnCalc() {
    for (let j = 0; j < gameMatrix.length; j++) {
        if (
            gameMatrix[0][j].sign !== null &&
            gameMatrix[0][j].sign === gameMatrix[1][j].sign &&
            gameMatrix[1][j].sign === gameMatrix[2][j].sign
        ) {
            return j;
        }
    }
    return false;
}

function isWinnerByColumn() {
    const result = winningColumnCalc();

    if (result !== false) {
        highlightWinningButtons([result + 1, result + 4, result + 7]);
        return true;
    } else return false;
}

function winningSlantCalc() {
    if (
        gameMatrix[0][0].sign !== null &&
        gameMatrix[0][0].sign === gameMatrix[1][1].sign &&
        gameMatrix[1][1].sign === gameMatrix[2][2].sign
    )
        return 0;

    if (
        gameMatrix[0][2].sign !== null &&
        gameMatrix[0][2].sign === gameMatrix[1][1].sign &&
        gameMatrix[1][1].sign === gameMatrix[2][0].sign
    )
        return 1;

    return false;
}

function isWinnerBySlant() {
    const result = winningSlantCalc();

    if (result !== false) {
        switch (result) {
            case 0:
                highlightWinningButtons([1, 5, 9]);
                break;
            case 1:
                highlightWinningButtons([3, 5, 7]);
                break;
        }

        return true;
    } else return false;
}
