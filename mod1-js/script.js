"use-strict";

// TASK-1

// const name = "<Генератор защитного поля>";
// let price = 1000;

// let message = `Выбран ${name}, цена за штуку ${price} кредитов.`;

// console.log(message);

// price = 2000;

// message = `Выбран ${name}, цена за штуку ${price} кредитов.`;

// console.log(message);

// TASK-2

// const total = 100;
// const ordered = Number(prompt('Введите количество товаров'));

// if(ordered > 100) {
//     alert ('На складе недостаточно товаров!');
// }

// else {
//     alert ('Заказ оформлен, с вами свяжется менеджер');
// }

// TASK-3

    // const ADMIN_PASSWORD = 'jqueryismyjam';
    // let message;

    // let passInput = prompt('Введите пароль');

    // console.log(passInput);

    // if(passInput === null) {
    //     message ('Отменено пользователем');
    // }else if(passInput === 'jqueryismyjam'){
    //     messanger = 'Добро пожаловать!';
    // }else {
    //     messanger = 'Доступ запрещен, неверный пароль!'
    // }
    // alert (messanger);

    // TASK-4

    // const credits = 23580;
    // const pricePerDroid = 3000;
    // const price = Number(prompt('Сколько вы хотите преобрести дроидов?'));
    // const totalPrice = (credits - (pricePerDroid * price));
    // console.log(totalPrice);

    // if (price === 0) {
    //     alert ('Отменено пользователем!');
    // }else if (totalPrice < 0) {
    //     alert ('Недостаточно средств на счету!')
    // }
    // if(totalPrice > 0) {
    //    const message = `Вы купили ${price} дроидов, на счету осталось ${totalPrice} кредитов.`;
    //    alert(message);
    // }
    
    // TASK-5

    // const countryChina = 'Китай';
    // const countryChili = 'Чили';
    // const countryAustralia = 'Австралия';
    // const countryIndia = 'Индия';
    // const countryJamaica = 'Ямайка';
    // const priceChina = 100;
    // const priceChili = 250;
    // const priceAustralia = 170;
    // const priceIndia = 80;
    // const priceJamaica = 120;

    // const nameCountry = prompt('Куда вы хотите заказать доставку?');
    // let message;

    // switch (nameCountry.toLowerCase()) {
    //     case countryChina.toLowerCase():
    //     message = `Доставка в ${countryChina} будет стоить ${priceChina} кредитов`;
    //         break;

    //         case countryChili.toLowerCase():
    //          message = `Доставка в ${countryChili} будет стоить ${priceChili} кредитов`;
    //          break; 

    //          case countryAustralia.toLowerCase():
    //          message = `Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов`;
    //          break;

    //          case countryIndia.toLowerCase():
    //          message = `Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов`;
    //          break;

    //          case countryJamaica.toLowerCase():
    //          message = `Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов`;
    //          break;

    //          default:
    //              alert('В вашей стране доставка не доступна!')
    //     }
    // if(message !== undefined) {
    //     alert(message);
    // }
    
    // TASK-6

    // let input = null;
    // let total = 0;

    // do {
    //     input = prompt('Введите любое число');
    //     console.log(input);
    //     let num = Number(input);
    //     total += num;
    // }while (input !== null);

    // alert(`Общая сумма чисел равна ${total}`);

    // console.log(total);
    