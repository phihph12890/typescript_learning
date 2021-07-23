//param?:type -> optional parameter
let increment: (numb: number, base?: number) => number;

//default parameter
increment = (numb: number, base: number = 1) => {
    return numb + base;
};

console.log(increment(5));
console.log(increment(5,5));
