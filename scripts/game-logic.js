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

    checkGameCoundition();
}

function checkGameCoundition() {
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length; j++) {
            //todo complete
        }
    }
}
/*  [null, null, null],
    [null, null, null],
    [null, null, null],  */
