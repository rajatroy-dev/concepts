let obj = {
    "A": "Apple",
    "B": "Ball",
    "C": "Cat",
    "D": "Dog"
};

Object.freeze(obj);

obj.E = "Elephant"; // As the object has been freezed so new elements cannot be added
delete obj.D; // Similarly existing elements cannot be removed
console.log(obj); // { A: 'Apple', B: 'Ball', C: 'Cat', D: 'Dog' }

obj.D = "Doll"; // Also existing elements cannot be edited
console.log(obj); // { A: 'Apple', B: 'Ball', C: 'Cat', D: 'Dog' }