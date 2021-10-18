let obj = {
    "A": "Apple",
    "B": "Ball",
    "C": "Cat",
    "D": "Dog"
};

Object.seal(obj);

obj.E = "Elephant"; // As the object has been sealed so new elements cannot be added
delete obj.D; // Similarly existing elements cannot be removed
console.log(obj);

obj.D = "Doll"; // But existing elements can be edited
console.log(obj);