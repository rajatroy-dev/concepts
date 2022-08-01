let sum = [1, 2, 3] + [4, 5, 6]

// It converts the arrays to string before concatening
console.log(sum); // 1,2,34,5,6

// So, to really concatenate array use concat
sum = [1, 2, 3].concat([4, 5, 6]);
console.log(sum); // [ 1, 2, 3, 4, 5, 6 ]