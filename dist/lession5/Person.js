"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//public
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var person1 = new Person1("Hồ Hoàng Phi");
console.log(person1.name);
/////////////////////////////////////////////////////////////////////////
//Private
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
////////////////////////////////////////////////////////////////////////
//Protected
var Person3 = /** @class */ (function () {
    function Person3(id, name) {
        this.id = id;
        this.name = name;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    Person3.prototype.setName = function (name) {
        this.name = name;
    };
    Person3.prototype.getId = function () {
        return this.id;
    };
    Person3.prototype.toString = function () {
        return this.id + " - " + this.name;
    };
    return Person3;
}());
//extends
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, salary) {
        var _this = _super.call(this, id, name) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " - " + this.salary;
    };
    return Employee;
}(Person3));
var e = new Employee(1, "Phi", 1000);
console.log(e.toString());
var Person4 = /** @class */ (function () {
    function Person4(id, name) {
        this.id = id;
        this.name = name;
    }
    Person4.prototype.getName = function () {
        return this.name;
    };
    Person4.prototype.setName = function (name) {
        this.name = name;
    };
    Person4.prototype.getId = function () {
        return this.id;
    };
    Person4.prototype.toString = function () {
        return this.id + " - " + this.name;
    };
    Person4.prototype.doWork = function () {
        console.log("Do something...");
    };
    return Person4;
}());
var person4 = new Person4(1, "KK");
person4.doWork();
var Person5 = /** @class */ (function () {
    function Person5(id, name) {
        this.id = id;
        this.name = name;
    }
    Person5.prototype.getName = function () {
        return this.name;
    };
    Person5.prototype.setName = function (name) {
        this.name = name;
    };
    Person5.prototype.getId = function () {
        return this.id;
    };
    Person5.prototype.toString = function () {
        return this.id + " - " + this.name;
    };
    return Person5;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(id, name, salary) {
        var _this = _super.call(this, id, name) || this;
        _this.salary = salary;
        return _this;
    }
    Employee1.prototype.getSalary = function () {
        return this.salary;
    };
    Employee1.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee1.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " - " + this.salary;
    };
    Employee1.prototype.workPlace = function () {
        return "FPT";
    };
    Employee1.prototype.doWork = function () {
        console.log("Coding...");
    };
    return Employee1;
}(Person5));
var emp = new Employee1(2, "Phi", 500);
emp.doWork();
console.log(emp.workPlace());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.doWork = function () {
        console.log("Studying...");
    };
    return Student;
}(Person5));
var s = new Student(1, "Phi");
console.log(s);
s.doWork();
//////////////////////////////////////////////////////////////////
