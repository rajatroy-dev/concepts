/**
 * Here we are able to break the parent loop from child loop using label
 */
console.log("loopOne");
loopOne:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 3) break loopOne;
        console.log("i", i, "j", j);
    }
}

/**
 * Here we are able to continue the parent loop from child loop using label
 */
console.log("loopTwo");
loopOne:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 3) continue loopOne;
        console.log("i", i, "j", j);
    }
}