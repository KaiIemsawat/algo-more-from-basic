// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    /* SOLUTION 1 */
    // replace any unneccessary character with "", /[^\w]/g refer to all non-alphabets
    // const replaceA = stringA.replace(/[^\w]/g, "").toLowerCase();
    // const replaceB = stringB.replace(/[^\w]/g, "").toLowerCase();

    return (
        /* SOLUTION 1 */
        // Split string to array of each character
        // Sort characters
        // Join back
        // replaceA.split("").sort().join("") ===
        // replaceB.split("").sort().join("")

        /* SOLUTION 2 */
        cleanString(stringA) === cleanString(stringB)
    );
}

/* SOLUTION 2 */
function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
