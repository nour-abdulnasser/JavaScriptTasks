/**
 *  @param args
 * @returns Number
 * Straightforward implementation
 */

function getSum(...args) {
  return args.reduce((acc, currentValue) => (acc = acc + currentValue), 0);
}

/**
 *
 * @param args
 * @returns Number
 * Function throws error on invalid inputs
 */
// function getSum(...args) {
//   const sum = args.reduce((acc, currentValue) => {
////  numberify strings to prevent concatenation
// // Bug: bools, nulls, undefined become numbers. true becomes 1.. use typeof??
//     const numberVersion = Number(currentValue);
//     if (isNaN(numberVersion)) {
//       throw new Error(`Invalid Input Type: ${currentValue} is not a Number. `);
//     }
//     return (acc = acc + numberVersion);
//   }, 0);

//   return sum;
// }

/**
 *
 * @param args
 * @returns Number
 * Function sums only valid inputs, preventing program from crashing
 */
function getSum(...args) {
  const invalidInputs = [];
  const sum = args.reduce((acc, currentValue, currentIndex) => {
    const numberVersion = Number(currentValue);
    if (isNaN(numberVersion)) {
      invalidInputs.push({
        inputNumber: currentIndex + 1,
        inputIndex: currentIndex,
        value: currentValue,
      });
      return acc; // Does not add the invalid input
    }
    return (acc = acc + numberVersion);
  }, 0);
  if (invalidInputs.length)
    console.warn(`Invalid Inputs Passed:`, invalidInputs);
  return sum;
}

console.log(getSum("skjdfh", 0.1, 0.03, 0.004, "true"));
