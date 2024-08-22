"use strict";

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector(".result");

const isValidNumber = (value) => {
    return value.trim() !== "" && !isNaN(parseFloat(value)) && isFinite(value);
};

const calculate = (operation) => {
    if (!isValidNumber(num1.value) || !isValidNumber(num2.value)) {
        alert('Введите числовые значения');
        return;
    }

    const numValue1 = Number(num1.value);
    const numValue2 = Number(num2.value);

    let reslut;
    switch(operation) {
        case 'add':
            reslut = numValue1 + numValue2;
            break;
        case 'sub':
            reslut = numValue1 - numValue2;
            break;
        case 'div':
            if(numValue2 !== 0) {
                reslut = numValue1 / numValue2;
            } else {
                alert('На ноль делить нельзя 🤖');
                return;
            }
            break;
        case 'mul':
            reslut = numValue1 * numValue2;
            break;
        default:
            console.error(`Неизвестная операция: ${operation}`);
            return;
    }

    num1.value = ''
    num2.value = ''
    result.textContent = `Результат: ${reslut}`;
};
