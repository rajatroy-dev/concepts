function A() {
    var x = 10;
    function B() {
        var x = 20;
        console.log(x); // 20
    }
    B();
    console.log(x); // 10
}

A();