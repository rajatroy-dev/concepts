console.log(JSON.stringify("production"));

// stringify returns the string with double inverted commas
const resOne = JSON.stringify("production") === "production";
console.log(resOne); // false

const resTwo = JSON.stringify("production") === '"production"';
console.log(resTwo); // true