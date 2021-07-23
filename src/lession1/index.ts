let a: number, b: number;
a = 2;
b = 8;
console.log(a + b);

let p: string;
p = "Hồ Hoàng Phi";
console.log(p);

const sum = (n1: number, n2: number) => {
    return n1 + n2;
};
console.log(sum(5, 4));

let arr: (number | string)[];
arr = [a, b, "Phi"];
console.log(arr);

let myTuple: [number, string, string];
myTuple = [1, "Hồ Hoàng Phi", "PH12890"];
console.log(myTuple);
