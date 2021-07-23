const sayHello = () => {
    console.log("Hello Hồ Hoàng Phi");
};

let sum1: (a: number, b: number) => number;
sum1 = (a: number, b: number) => {
    return a + b;
};

const process = (callback: (a: number, b: number) => number) => {
    const x = 1;
    const y = 3;
    const result = callback(x, y);
    console.log(result);
};

process(sum1);
// process(sayHello);
