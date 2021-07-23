"use strict";
var a1 = 12; // Giao của 2 kiểu Combinable và Numeric là number, nên chỉ nhận giá trị number
var x = {
    ten: "Nguyễn Văn A",
    maSV: "PH01",
    ngayBatDau: new Date(),
};
var user1 = {
    hoTen: "Nguyễn Văn B",
    ngaySinh: new Date(1998, 5, 23),
    diaChi: "Hà Nội",
    sdt: "0987654321",
    email: "nguyenvanb@gmail.com"
};
console.log(user1);
