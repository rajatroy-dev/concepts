let res = abc();
console.log(res); // 3

// hoisted
function abc () {
    return 1 + 2;
}

// not - hoisted
// var abc = () => {
//     return 1 + 2;
// }

// not - hoisted
// var abc = function () {
//     return 1 + 2;
// }