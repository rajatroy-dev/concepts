let symbol = Symbol();

// Keys of an object should be string, symbol or number
const obj = {
    "A": "Apple",
    "B": "Ball",
    1: "One",
    symbol: "Symbol"
}
console.log(obj); // Order of elements is not guaranteed

// Keys of a map can be a string, number, object, array, symbol, boolean, null or undefined
let objectKey = new Object();
let array = [1, 2, 3];
const map = new Map();
map.set("A", "Apple");
map.set("B", "Ball");
map.set(1, "One");
map.set(symbol, "Symbol");
map.set(true, "True");
map.set(null, "Null");
map.set(undefined, "Undefined");
map.set(objectKey, "Object");
map.set(array, "Array");
console.log(map); // Order of elements is guaranteed