let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise One resolved!");
    }, 1000);
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two resolved!");
    }, 2000);
});

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Three rejected!");
    }, 3000);
});

let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Four rejected!");
    }, 4000);
});

let settledPromise = Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour]);

settledPromise.then(res => console.log(res)).catch(err => console.log(err));
/*
[
  { status: 'fulfilled', value: 'Promise One resolved!' },
  { status: 'fulfilled', value: 'Promise Two resolved!' },
  { status: 'rejected', reason: 'Promise Three rejected!' },
  { status: 'rejected', reason: 'Promise Four rejected!' }
]
*/