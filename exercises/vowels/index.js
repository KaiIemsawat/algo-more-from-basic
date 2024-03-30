// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    let charArr = str.toLowerCase().split("");

    for (char of charArr) {
        for (v of vowels) {
            if (char === v) {
                count++;
            }
        }
    }
    return count;
}

console.log(vowels("aeioOUIAu123"));

module.exports = vowels;
