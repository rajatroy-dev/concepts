// Method overloading is not supported in Javascript
// JS will consider the latest definition only.
// In this case: function Person(name, age)

function Person(name, age, sex) {
    console.log(name);
    console.log(age);
    console.log(sex);
}

function Person(name, age) {
    console.log(name);
    console.log(age);
}

let personOne = Person("Raphael", 21);
let personTwo = Person("Alicia", 22, "Female");