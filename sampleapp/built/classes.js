"use strict";
/*****************************
class Person {
    name: string | undefined;
}

const person=new Person();
person.name="Jane";

console.log(person.name);
//********************************/
/*********************/
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Mohan");
console.log(person2.getName());
//person2.name; //error
//*******************************/
