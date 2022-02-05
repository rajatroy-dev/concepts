const anObject = {
    "a": "apple",
    "b": "ball"
};

const nullObject = null;

/**
 * Null Coalescing operator: ??
 * 
 * nullObject !== null ? nullObject : anObject
 * 
 * The above statement can be reduced to nullObject ?? anObject 
 */
let decision = nullObject ?? anObject;
let becision = anObject ?? nullObject;

console.log("decision: ", decision);
console.log("becision: ", becision);