// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let resultArr = [];
    let tempArr = [];
    if (array.length <= size) {
        resultArr.push(array);
        return resultArr;
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        tempArr.push(array[i]);
        if (tempArr.length === size) {
            resultArr.push(tempArr);
            tempArr = [];
        } else if (i === array.length - 1) {
            resultArr.push(tempArr);
        }
    }

    return resultArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

module.exports = chunk;
