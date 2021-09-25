const anObject = {
    "a": "Apple",
    "b": "Ball",
    "c": "Cat"
};

const mutable = (anObject) => {
    anObject.d = "Dog";
    return anObject;
}

const immutable = (anObject) => {
    let tempObject = { ...anObject };
    tempObject.d = "Dog";
    return tempObject;
}

// mutable(anObject);
immutable(anObject);

console.log(anObject);