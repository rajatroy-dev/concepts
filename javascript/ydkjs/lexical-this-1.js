var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};

var id = "not awesome";

obj.cool(); // awesome

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem
 * 
 * Code executed by setTimeout() is called from an execution context separate
 * from the function from which setTimeout was called. The usual rules for setting
 * the this keyword for the called function apply, and if you have not set this in
 * the call or with bind, it will default to the window (or global) object. It
 * will not be the same as the this value for the function that called setTimeout.
 */
setTimeout(obj.cool, 100); // undefined