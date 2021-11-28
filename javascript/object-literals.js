let a = "a";
let b = 2;
let c = {};

// shorthand
let objOne = { a, b, c };
console.log(objOne); // { a: 'a', b: 2, c: {} }

// shorthand
let objTwo = {
    add(a, b) { return a + b }
}
console.log(objTwo); // { add: [Function: add] }

// Computed property names
let p = "props";
let objThree = {
    [p]: "properties"
}
console.log(objThree); // { props: 'properties' }