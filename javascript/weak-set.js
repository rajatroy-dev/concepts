let weakSet = new WeakSet();

let objOne = { "alphabet": "a" };
let objTwo = { "alphabet": "b" };
let objThree = { "alphabet": "c" };
let objFour = { "alphabet": "d" };
let objFive = { "alphabet": "e" };

weakSet.add(objOne);
weakSet.add(objTwo);
weakSet.add(objThree);
weakSet.add(objFour);
weakSet.add(objFive);
// weakSet.add(1); TypeError: Invalid value used in weak set

console.log(weakSet.has(objOne));
console.log(weakSet.has(objTwo));
console.log(weakSet.has(objThree));
console.log(weakSet.has(objFour));
console.log(weakSet.has(objFive));

weakSet.delete(objOne);
console.log(weakSet.has(objOne));