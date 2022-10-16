"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function SayHi() {
    console.log("Say Hi");
}
SayHi();
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 3));
console.log(add(2, 3, 4));
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(2, 4));
console.log(multiply(2));
