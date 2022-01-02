let weakMap = new WeakMap();

let objOne = { "alphabet": "a" };
let objTwo = { "alphabet": "b" };
let objThree = { "alphabet": "c" };
let objFour = { "alphabet": "d" };
let objFive = { "alphabet": "e" };

weakMap.set(objOne, { "a": "Apple" });
weakMap.set(objTwo, { "b": "Ball" });
weakMap.set(objThree, { "c": "Cat" });
weakMap.set(objFour, { "d": "Dog" });
weakMap.set(objFive, { "e": "Elephant" });

console.log(weakMap.get(objOne));
console.log(weakMap.get(objTwo));
console.log(weakMap.get(objThree));
console.log(weakMap.get(objFour));
console.log(weakMap.get(objFive));

console.log(weakMap.has(objOne));
weakMap.delete(objOne);
console.log(weakMap.has(objOne));