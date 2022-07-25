function A() {
    var x = 10;
    function B() {
        x = 20;
        console.log(x); // 20
    }
    B();
    console.log(x); // 20
}

A();