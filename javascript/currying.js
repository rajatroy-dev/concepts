const add = (a, b) => {
    return a + b;
}
console.log(add(2, 3)); // 5

function curryAdd(a) {
    return function (b) {
        return a + b;
    }
}
console.log(curryAdd(3)(4)); // 7

function curryFn(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        }
    }
}

const fn = (a, b) => {
    return a + b;
}
console.log(curryFn(fn)(4)(5)); // 9