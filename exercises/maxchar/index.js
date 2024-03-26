// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // Create an object with distinct key
    let chars = {};
    for (let char of str) {
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    }

    // Loop trough the object to get max value
    let max = 0;
    let res = "";
    for (let key in chars) {
        if (chars[key] > max) {
            max = chars[key];
            res = key;
        }
    }
    return res;
}

module.exports = maxChar;
