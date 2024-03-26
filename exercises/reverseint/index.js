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

    if (n < 0) rev = -rev;

    return rev;
}

console.log(reverseInt(300));

module.exports = reverseInt;
