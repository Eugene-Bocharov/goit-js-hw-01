'use strict'

let credits = 23580;
const pricePerDroid = 3000;
let droidnum = prompt('Введіть число ремонтних дроїдів, які Ви хочете купити!');

let totalPrice;
let remainder;

if (!droidnum) {
    console.log('Скасовано користувачем!');
} else {
    totalPrice = droidnum * pricePerDroid;

    //cnsl.log(totalPrice);

    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!');
    } else {
        remainder = credits - totalPrice;
        console.log(`Ви купили ${droidnum} дроїдів, на рахунку залишилося ${remainder} кредитів.`);
        alert(`Ви купили ${droidnum} дроїдів, на рахунку залишилося ${remainder} кредитів.`);
    };
};