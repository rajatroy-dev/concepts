let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

array.splice(1, 0, 1, 2, 3, 4); // add 1, 2, 3, 4 at position 1 and remove 0 elements // returns an array of the removed elements
console.log(array); // [ 1, 1, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array.splice(0, 4, 1, 2, 3, 4)); // From position 0 remove 4 elements and add 1, 2, 3, 4 // returns [1, 2, 3, 4]
console.log(array);