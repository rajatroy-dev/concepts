// Array.protoype.anArray returns boolean

let anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Find 1 from index 4
console.log(anArray.includes(1, 4)); // false

let aString = "The quick brown fox jumps over the lazy dog."
// Find "brown" from index 1
console.log(aString.includes("brown", 1)); // true