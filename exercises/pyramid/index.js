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

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let returnStr = "";
        for (let col = n - 1 - row; col > 0; col--) {
            returnStr += " ";
        }

        for (let block = 1; block <= (row + 1) * 2 - 1; block++) {
            returnStr += "#";
        }
        for (let col = n - 1 - row; col > 0; col--) {
            returnStr += " ";
        }

        console.log(returnStr);
    }
}

pyramid(3);

module.exports = pyramid;
