// Coercion: Empty array to number is 0 as the length is 0
console.log('[] to Number: ', Number([]));

// Coercion: [] is truthy in JS
console.log('[] in Boolean', Boolean([]));

console.log('0 to Boolean: ', Boolean(0)); // false
console.log('1 to Boolean: ', Boolean(1)); // true

// Coercion: Since we are using ! operator so [] is converted to Boolean
// !true is false
// false to Number = 0
console.log('![] to Number: ', Number(![]));

console.log('[] == ![]', [] == ![]);