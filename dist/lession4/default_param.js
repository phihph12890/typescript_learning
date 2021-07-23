"use strict";
//param?:type -> optional parameter
var increment;
//default parameter
increment = function (numb, base) {
    if (base === void 0) { base = 1; }
    return numb + base;
};
console.log(increment(5));
console.log(increment(5, 5));
