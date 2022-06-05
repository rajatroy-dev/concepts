let array = [1, 2, 3, 4, 5];

// copy to index 2 all elements from 0 to 3
let result = array.copyWithin(2, 0, 2);
console.log(result); // [ 1, 2, 1, 2, 5 ]