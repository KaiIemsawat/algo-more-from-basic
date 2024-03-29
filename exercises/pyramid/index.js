// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
/* SOLUTION 1 */
// for (let row = 0; row < n; row++) {
//     let returnStr = "";
//     for (let col = n - 1 - row; col > 0; col--) {
//         returnStr += " ";
//     }

//     for (let block = 1; block <= (row + 1) * 2 - 1; block++) {
//         returnStr += "#";
//     }
//     for (let col = n - 1 - row; col > 0; col--) {
//         returnStr += " ";
//     }

//     console.log(returnStr);
// }

/* SOLUTION 2 */
// for (let i = 1; i <= n; i++) {
//     console.log(
//         " ".repeat(n - i) + "#".repeat(i * 2 - 1) + " ".repeat(n - i)
//     );
// }
// }

function pyramid(n, row = 0, level = "") {
    if (row === n) return;

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPoint = Math.floor((2 * n - 1) / 2);
    let add;

    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }

    pyramid(n, row, level + add);
}

pyramid(3);

module.exports = pyramid;
