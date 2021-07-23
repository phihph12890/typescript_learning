const person = {
    name: "PHIHPH",
    age: 20,
    address: "Hà Nội",
};

const employee = {
    ...person,
    salary: "1000$",
};
console.log(employee);

const diemTP = [6, 7, 8, 9, 8, 7, 9];
const diemAssignment = [8.5, 9.5];

const diemAll = [...diemTP, ...diemAssignment];
console.log(diemAll);
