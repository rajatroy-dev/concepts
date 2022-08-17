/**
 * Generate values lazily instead of eagerly
 */

function* generator(start = 0, end = 10, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

for (const val of generator()) {
    console.log(val);
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);