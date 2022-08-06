console.log(typeof []); // object
console.log(typeof null); // object

console.log(null instanceof Object); // false ?
// Though these are both objects, they are actually
// different types of objects

console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(Object)); // [object Function]