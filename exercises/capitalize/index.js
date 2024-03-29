// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    /* SOLUTION 1 */
    // let result = "";
    // for (let i = 0; i < str.length; i++) {
    //     if (i === 0 || str.charAt(i - 1) === " ") {
    //         result += str.charAt(i).toUpperCase();
    //     } else {
    //         result += str.charAt(i);
    //     }
    // }
    // return result;

    /* SOLUTION 2 */
    /* NOTE */
    // in js, we can use [] to access certain char in string
    // const word = "abcde";
    // console.log(word[3]);
    // expect 'd'

    // const words = [];
    // for (let word of str.split(" ")) {
    //     words.push(word[0].toUpperCase() + word.slice(1));
    // }
    // return words.join(" ");

    /* SOLUTION 3 */
    // return str
    //     .split(" ")
    //     .map((el) => el[0].toUpperCase() + el.slice(1))
    //     .join(" ");

    /* SOLUTION 4 */
    // The small letter \b word boundary indicates that a pattern is bounded by a non-word character
    // \w, matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "$5.28", and "3" in "3D".
    return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

console.log(capitalize("sfda fafd, fsa"));

module.exports = capitalize;
