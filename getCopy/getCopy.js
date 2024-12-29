const original = { a: 1, b: { c: 2 } }; // c --> 2

/**
 * Shallow copy
 */
// Using spread
const shallowCopy = { ...original };
shallowCopy.b.c = 5; // shares reference, OG also changes

/**
 * Deep
 */
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4;

console.log("original:", original); // c --> 5
console.log("deep:", deepCopy); 
console.log("shallow:", shallowCopy);

//change in original
// original.b.c = 55;
// console.log("original changed:", original);
// console.log("shallow:", deepCopy);
// console.log("shallow:", shallowCopy);
