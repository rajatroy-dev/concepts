var avar = "A variable";

// This function will print A variable
(function () {
    console.log(avar);
})();

// This function will print undefined because avar was redecalred inside the function.
// As such variable hoisting will take place
(function () {
    console.log(avar);
    var avar = "Variable inside function";
})();

// Variable hoisting
console.log(x);
var x = 6;

// let variables are no hoisted
console.log(y);
let y = 7;