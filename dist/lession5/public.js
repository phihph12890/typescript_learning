"use strict";
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var person1 = new Person1("Hồ Hoàng Phi");
console.log(person1.name);
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (name) {
        this.name = name;
    };
    return Person2;
}());
var person2 = new Person2("Hồ Phi");
console.log(person2.getName());
person2.setName("lll");
console.log(person2.getName());
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    Person3.prototype.setName = function (name) {
        this.name = name;
    };
    return Person3;
}());
var person3 = new Person3("Hồ Hoàng Phi");
console.log(person3.getName());
