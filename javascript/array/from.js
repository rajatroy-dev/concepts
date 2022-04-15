const names = ["Anthony", "Bella", "Chrisite"];

// Array.from returns a new array with the modified values
const returned = Array.from(names, name => `Hi! ${name}`);

console.log("names:", names);
console.log("returned:", returned);