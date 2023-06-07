function swapTurn() {
    currentTurn = currentTurn === 'O' ? 'X' : 'O';
}

function getAllBoardButtons() {
    return gameMatrix.flat();
}
