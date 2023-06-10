function swapTurn() {
    currentTurn = currentTurn === 'O' ? 'X' : 'O';
}

const getAllBoardButtons = () => gameMatrix.flat();

const assertArray = (value) => (value instanceof Array ? value : [value]);
