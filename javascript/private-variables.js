class PrivateVariables {
    #privateVarOne; // declare private variables using #
    #privateVarTwo;

    constructor(one, two) {
        this.#privateVarOne = one;
        this.#privateVarTwo = two;
    }

    getPrivateVarOne() {
        return this.#privateVarOne;
    }

    getPrivateVarTwo() {
        return this.#privateVarTwo;
    }
}

let privateVariables = new PrivateVariables(1, 2);

console.log(privateVariables.getPrivateVarOne());
console.log(privateVariables.getPrivateVarTwo());

console.log(privateVariables.#privateVarOne); // SyntaxError
console.log(privateVariables.#privateVarTwo); // SyntaxError

console.log(privateVariables.privateVarOne); // undefined
console.log(privateVariables.privateVarTwo); // undefined