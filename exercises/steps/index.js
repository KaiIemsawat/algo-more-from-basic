// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
/* SOLUTION 1 */
// let space = "";
// let buildStep = "";

// Create a string of white spaces
// for (let i = 0; i < n; i++) {
//     space += " ";
// }

// Each iteration increase a '#' and decrease white space
// for (let i = 0; i < n; i++) {
//     buildStep += "#";
//     space = space.slice(1);
//     console.log(buildStep + space);
// }

/* SOLUTION 2 */
// for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i) + " ".repeat(n - i));
// }

/* SOLUTION 3 */
// Work as row and column
// Outer loop for row.
// for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//         if (column <= row) {
//             stair += "#";
//         } else {
//             stair += " ";
//         }
//     }
//     console.log(stair);
// }
// }

/* SOLUTION 4 recursion */
function steps(n, row = 0, stair = "") {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        steps(n, row + 1); // third arg is not required to put here. it will use the default "" by default
        return;
    }

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }

    steps(n, row, stair);
}

steps(5);

module.exports = steps;
