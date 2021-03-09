'use strict';

let usercountry = prompt('Введіть вашу країну').toLowerCase();
let cost;

    switch (usercountry) {
        case 'китай':
            cost = 100;
            console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
            break;
            
    
        case 'чилі':
            cost = 250;
            console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
            break;
            
    
        case 'австралія':
            cost = 170;
            console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
            break;
            
        case 'індія':
            cost = 80;
            console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
            break;

        case 'ямайка':
            cost = 120;
            console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
            break;
    
        default:
            console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);   
    }