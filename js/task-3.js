'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt('Введіть пароль!');
let message;



if (password) {
 if (password === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
    console.log(message);
 } else {
    message = 'Доступ заборонений, невірний пароль!';
    console.log(message);;
    }
} else {
    console.log('Скасовано користувачем!');
};

