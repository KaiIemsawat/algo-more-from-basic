// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    /* SOLUTION 1 */
    let vowelsArr = ["a", "e", "i", "o", "u"];
    let count = 0;

    // let charArr = str.toLowerCase().split(""); // No split("") needed

    for (let char of str.toLowerCase()) {
        if (vowelsArr.includes(char)) {
            count++;
        }
    }
    return count;

    /* SOLUTION 2 REGEX */
    // return !str.match(/[AEIOUaeiou]/g) ? 0 : str.match(/[aeiouAEIOU]/g).length;
}

console.log(vowels("aeioOU IAu123"));

module.exports = vowels;
