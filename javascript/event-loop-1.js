(() => console.log(1))()

// eventloop: timer -> pending callback -> idle, prepare -> connection -> check -> close callback

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 1000);
}); // promise has more priority in event loop so will be printed before setTimeout

(() => setTimeout(() => console.log(2), 1000))()

promise.then(console.log(3));

(() => console.log(4))()