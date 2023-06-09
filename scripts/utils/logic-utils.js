function swapTurn() {
    currentTurn = currentTurn === 'O' ? 'X' : 'O';
}

const getAllBoardButtons = () => gameMatrix.flat();

function assertArray(variable) {
    return variable instanceof Array ? variable : [variable];
}
