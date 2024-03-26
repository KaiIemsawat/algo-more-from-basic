// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* SOLUTION 1 */
// function reverse(str) {
//     let res = "";
//     for (let char of str) {
//         res = char + res;
//     }
//     return res;
// }

/* SOLUTION 2 */
// function reverse(str) {
//     return str.split("").reverse().join("");
// }

/* SOLUTION 3 */
function reverse(str) {
    return str.split("").reduce((res, char) => char + res, "");
}

// Solution 3 breakdown

/* function reverse(str) {
    const arr = str.split("");
    return arr.reduce((res, char) => {
        return char + res;
    }, "");
}

// reduce() requires 2 parameters, 1st is function, 2nd is starting point 
// function will also takes 2 parameters. 1st, what we will reduce to. 2nd is for each individual item

arrayVariable.reduce((arg1, arg2) => {
    // reduce to only 1 value
    return 
}, "originalValueHere") */

// console.log(reverse("testReverse"));

module.exports = reverse;
