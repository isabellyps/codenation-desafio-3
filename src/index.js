"use strict";

const fibonacci = () => {
    var numFibonacci = [];
    var num1 = 0;
    var num2 = 1;
    var num3 = 0;

    do {
        numFibonacci.push(num3);
        num1 = num1;
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    } while (num2 <= 377);

    return numFibonacci;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci,
};
