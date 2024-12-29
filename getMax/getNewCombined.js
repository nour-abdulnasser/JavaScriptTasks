/**
 * Simple, straightforward approach
 *
 */
// function combineArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
//   }

/**
 *
 * broader approach
 */
function combineArrays(...arrays) {
  const allArraysFlattened = [];
  for (let array of arrays) {
    const flattened = array.flat(); // ! only works on one level... also not necessary for our example
    allArraysFlattened.push(...flattened); // flatten array, push the elements by spread op
  }
  return allArraysFlattened;
}

/**
 * Finding max
 */
// Using built-in Math object
function getMax(combinedArrays) {
  return Math.max(...combinedArrays);
}

// using loop
//   function getMax(array) {
//     let maxNum = array[0];
//     for (let number of array) {
//       if (number > maxNum) {
//         maxNum = number;
//       }
//     }
//     return maxNum;
//   }

/**
 * results
 */

const arr1 = [5, 10, 15];
const arr2 = [20, 25, 30];
const combined = combineArrays(arr1, arr2);
const max = getMax(combined);

console.log("combined array", combined);
console.log("max of both arrays", max);
