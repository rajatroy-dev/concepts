const firstname = fun();

// var myname = 'Rajat'; // hoisted
let myname = 'Rajat'; // not-hoisted

function fun() {
    return `My name is ${myname} Roy`; // ReferenceError: Cannot access 'myname' before initialization
}

console.log(firstname);