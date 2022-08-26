let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = array.some((value, index, array) => value > 10);

console.log(result); // false
