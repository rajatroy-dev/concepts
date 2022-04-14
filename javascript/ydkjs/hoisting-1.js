foo(); // 3

function foo() {
    console.log(1);
}

var foo = function () {
    console.log(2);
};

function foo() {
    console.log(3);
}

// While multiple/duplicate var declarations are effectively ignored, subsequent function declarations do override previous ones.