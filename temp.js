const matrix = [
    [1, 2, 3],
    [3, 3, 3],
];

const placeToIndex = {
    1: { i: 1, j:1 },
};

console.log(matrix[placeToIndex[1].i][placeToIndex[1].j]);
