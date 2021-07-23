//Union type
type Combinable = string | number;
type Numeric = number | boolean;
//Intersection type
type Universal = Combinable & Numeric;

let a1: Universal = 12; // Giao của 2 kiểu Combinable và Numeric là number, nên chỉ nhận giá trị number
// let b1: Universal = true;
// let c1: Universal = "Phi";

//Intersection type của object
type PolyStudent = {
    ten: string;
    maSV: string;
};
type NhanVien = {
    ten: string;
    ngayBatDau: Date;
};

type ThucTapSinh = PolyStudent & NhanVien;
let x: ThucTapSinh = {
    ten: "Nguyễn Văn A",
    maSV: "PH01",
    ngayBatDau: new Date(),
};

//Luyện tập
type ThongTinCoBan = {
    hoTen: string;
    ngaySinh: Date;
    diaChi: string;
};
type Sdt = {
    sdt: string;
};
type Email = {
    email: string
};
type User = ThongTinCoBan & Sdt & Email;
let user1: User = {
    hoTen: "Nguyễn Văn B",
    ngaySinh: new Date(1998,5,23),
    diaChi: "Hà Nội",
    sdt: "0987654321",
    email: "nguyenvanb@gmail.com"
}
console.log(user1);
