(function () {
    const obj = {
        "a": {
            "b": {
                "c": 1,
                "d": 2,
            }
        },
        "e": "elephant",
    };
    const { a: { b: { c, d } } } = obj;

    console.log(c, d);
    console.log(c + d);
})();