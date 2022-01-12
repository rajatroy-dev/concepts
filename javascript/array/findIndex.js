anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// returns the first index found for the matching element or else -1
const found = anArray.findIndex((value, index, array) => value % 2 == 0, this);

console.log(found); // 1