const a_func = () => {
    return "This function returns a string!";
}

console.log("a_func output: ", a_func());

// prefix void to an expression if you explicitly want it to return undefined
console.log("void a_func output: ", void a_func());
console.log("void a_func output: ", void 0);
