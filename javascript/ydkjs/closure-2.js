for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100); // globally scoped so, if the value changes outside setTimeout it will affect console log inside setTimeout
}
// 5
// 5
// 5
// 5
// 5

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 200); // locally scoped so, if the value changes outside setTimeout it will not affect console log inside setTimeout
}
// 0
// 1
// 2
// 3
// 4