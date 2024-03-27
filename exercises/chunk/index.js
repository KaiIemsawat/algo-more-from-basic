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
    const resultArr = [];

    /* SOLUTION 1 */
    // let tempArr = [];
    // if (array.length <= size) {
    //     return [array];
    // }
    // for (let i = 0; i < array.length; i++) {
    //     tempArr.push(array[i]);
    //     if (tempArr.length === size) {
    //         resultArr.push(tempArr);
    //         tempArr = [];
    //     } else if (i === array.length - 1) {
    //         resultArr.push(tempArr);
    //     }
    // }

    /* SOLUTION 2 */
    // if (array.length <= size) return [array];

    // while (array.length > 0) {
    //     resultArr.push(array.splice(0, size));
    // }

    /* SOLUTION 3 */
    for (let element of array) {
        const last = resultArr[resultArr.length - 1]; // for the first iteration, last will be undefined

        if (!last || last.length === size) {
            resultArr.push([element]); // push the new sub array along with the first element for that sub array
        } else {
            last.push(element);
        }
    }

    return resultArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

module.exports = chunk;
