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

function steps(n) {
    /* SOLUTION 1 */
    // let space = "";
    // let buildStep = "";

    // for (let i = 0; i < n; i++) {
    //     space += " ";
    // }

    // for (let i = 0; i < n; i++) {
    //     buildStep += "#";
    //     space = space.slice(1);
    //     console.log(buildStep + space);
    // }

    /* SOLUTION 2 */
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i) + " ".repeat(n - i));
    }
}

steps(5);

module.exports = steps;
