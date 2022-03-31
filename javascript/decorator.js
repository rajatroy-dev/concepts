let decorator = (func) => (...args) => {
    console.log("Inside decorator!");
    return func(args);
}

@decorator
function implement(args) {
    return args[0] + args[1];
}

console.log(implement([1, 2]));