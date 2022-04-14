function foo() {
    var a = 2; // this is defined inside closure -> foo

    function baz() {
        // function buz is part of closure -> foo
        // so, it will be able to access a
        console.log(a); // 2
    }

    bar(baz);
}

function bar(fn) {
    // this is inside closure -> bar
    fn(); // this is run as part of closure -> bar
}

foo();