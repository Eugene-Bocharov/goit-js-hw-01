'use strict'

let input;
let total = 0;

do {
    input = +prompt('Введіть число!');
    if (input) {
        total += input;
        // console.log(total);
    }
} while (input);


if (!input) {
    alert(`Загальна сума чисел дорівнює ${total}.`);
};