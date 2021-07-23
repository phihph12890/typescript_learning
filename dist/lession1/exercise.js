"use strict";
var check = function (param) {
    if (typeof param == "string") {
        console.log("Họ tên: " + param);
    }
    else if (param == 0) {
        console.log("Giới tính: Nam");
    }
    else if (param == 1) {
        console.log("Giới tính: Nữ");
    }
};
check("Hồ Phi");
check(0);
check(1);
