let firstPromise = new Promise(resolve => {
    setTimeout(() => resolve("First promise resolved!"), 3000);
});

let secondPromise = new Promise(resolve => {
    setTimeout(() => resolve("Second promise resolved!"), 4000);
});

let result = Promise.race([firstPromise, secondPromise]); // Promise.race will return the first resolved promise from the provided array of promises

result.then(res => console.log(res));