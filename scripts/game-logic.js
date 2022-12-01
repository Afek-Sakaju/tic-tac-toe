function changeTurn() {
    turn = !turn ? 1 : 0;
}

function updateGameCoundition(place) {
    const sign = !turn ? 0 : 1;
    const i = (place - 1) % 3;
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
    gameMatrix[j][i] = sign;

    isFinishedGame = checkGameCoundition();
}

function checkGameCoundition() {
    for (let i = 0; i < gameMatrix.length; i++) {
        if (
            gameMatrix[i][0] !== null &&
            gameMatrix[i][0] === gameMatrix[i][1] &&
            gameMatrix[i][1] === gameMatrix[i][2]
        ) {
            return true;
        }
    }

    for (let j = 0; j < gameMatrix.length; j++) {
        if (
            gameMatrix[0][j] !== null &&
            gameMatrix[0][j] === gameMatrix[1][j] &&
            gameMatrix[1][j] === gameMatrix[2][j]
        ) {
            return true;
        }
    }

    if (
        gameMatrix[0][0] !== null &&
        gameMatrix[0][0] === gameMatrix[1][1] &&
        gameMatrix[1][1] === gameMatrix[2][2]
    )
        return true;

    if (
        gameMatrix[0][2] !== null &&
        gameMatrix[0][2] === gameMatrix[1][1] &&
        gameMatrix[1][1] === gameMatrix[2][0]
    )
        return true;

    return false;
}
