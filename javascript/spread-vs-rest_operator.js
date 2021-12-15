/**
 * Spread operator is an operator that is used on iterables such as objects and arrays.
 * But rest parameter are arguments that is passed to functions. Accept indefinite number of arguments
 */

let spreadObj = {
    "a": "Apple",
    "b": "Ball",
    "c": "Cat"
};

let spreadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log({ ...spreadObj });
console.log([...spreadArray]);

const restParameterFn = (...restArgs) => {
    console.log(...restArgs);
}

restParameterFn([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
restParameterFn({
    "a": "Apple",
    "b": "Ball",
    "c": "Cat"
});