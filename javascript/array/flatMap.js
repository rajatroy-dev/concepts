let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let flatArray = array.flatMap((number) => number * 2);

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatArray); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18 ]