// "true" is a string that has value. So, it's truthy.
console.log('"true" to Boolean: ', Boolean("true"));

// "false" is a string that has value. So, it's truthy.
console.log('"false" to Boolean: ', Boolean("false"));

// "true" is not a Number
console.log('"true" to Number: ', Number("true"));
// true is Truthy. So, true = 1
console.log('true to Number: ', Number(true));

// "true" == true => NaN == 1 => false
console.log('"true" == true: ', "true" == true);

// Similalrly, "false" == false => false
console.log('"false" == false: ', "false" == false);

// "true" == "false"
console.log('"true" == "false"', "true" == "false");

// !"true" == !"false" => !NaN == !NaN
console.log('!"true" == !"false"', !"true" == !"false");

// !!"true" == !!"false" => !!NaN == !!NaN
console.log('!!"true" == !!"false"', !!"true" == !!"false");