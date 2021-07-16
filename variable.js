"use strict";
let str = "hello world";
let var1 = 1;
function sample() {
    let var1 = 2;
    let var2 = 3;
    {
        let var1 = 4;
        console.log(var1);
    }
    console.log(var1);
}
console.log(var1);
sample();
