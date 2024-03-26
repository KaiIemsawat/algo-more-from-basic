// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* SOLUTION 1 */
// function palindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         let j = str.length - 1 - i;
//         if (str.charAt(i) !== str.charAt(j)) {
//             return false;
//         }
//     }
//     return true;
// }

/* SOLUTION 2 */
function palindrome(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length - 1 - i];
    });
}
// arrayVariable.every((element, index) => {}) -- index is optional

// console.log(palindrome("test"));

module.exports = palindrome;
