const trungBinhCong = (...numbers: number[]) => {
    let sum: number = 0;
    let count: number = 0;
    console.log(numbers);

    numbers.forEach((element) => {
        sum += element;
        count++;
    });
    return sum / count;
};
console.log(trungBinhCong(5,8,9,8));
