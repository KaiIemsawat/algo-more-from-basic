// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let tempStr = n.toString();

    let rev = parseInt(tempStr.split("").reduce((res, char) => char + res, ""));

    return rev * Math.sign(n);
}

console.log(reverseInt(3001));

module.exports = reverseInt;
