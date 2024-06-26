// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    let counter = 1;

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let startColumn = 0;
    let endColumn = n - 1;

    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        /* Top row */
        // Loop i while keep counter ++ each iteration until the last expected index (endColumn)
        // Then, startRow++ to work on the next row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        /* Right column */
        // This will only assign the value of last column of each row
        // Then, endColumn-- to work on less index column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        /* Bottom row */
        // Iterate from higher index column to lower index column,
        // then endRow-- to less index row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        /* Start column */
        // Work from lower row up on start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}

console.log(matrix(5));

module.exports = matrix;
