const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
    console.log('foo'); // synchronously it is logged first
    setTimeout(bar, 0); // asynchronous with lesser priority. Logged fourth.
    new Promise((resolve, reject) => resolve('should be after baz, before bar')) // asynchronous with higher priority. Logged third.
        .then(resolve => console.log(resolve));
    baz(); // synchronously it is logged second
}

foo();
/**
 * foo
 * baz
 * should be after baz, before bar
 * bar
 */