console.log(varabc);
var varabc = 1; // works. variable is hoisted

// console.log(letabc); // let variable is not hoisted. So, the zone brfore declaring it is a temporal dead zone for letabc
// let letabc = 1;

console.log(constabc); // const variable is not hoisted. So, the zone brfore declaring it is a temporal dead zone for constabc
const constabc = 1;