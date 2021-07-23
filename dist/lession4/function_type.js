"use strict";
var sayHello = function () {
    console.log("Hello Hồ Hoàng Phi");
};
var sum1;
sum1 = function (a, b) {
    return a + b;
};
var process = function (callback) {
    var x = 1;
    var y = 3;
    var result = callback(x, y);
    console.log(result);
};
process(sum1);
// process(sayHello);
