"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var person = {
    name: "PHIHPH",
    age: 20,
    address: "Hà Nội",
};
var employee = __assign(__assign({}, person), { salary: "1000$" });
console.log(employee);
var diemTP = [6, 7, 8, 9, 8, 7, 9];
var diemAssignment = [8.5, 9.5];
var diemAll = __spreadArray(__spreadArray([], diemTP), diemAssignment);
console.log(diemAll);
