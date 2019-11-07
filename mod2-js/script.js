"use-strict";

    // TASK-1
    
    // const logItems = function(array){
    // for (let i = 0; i < array.length; i += 1) {
    //     console.log( i + 1, array[i]);
    //   }
    //  }

    // logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

    // logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

    // TASK-2

//     const calculateEngravingPrice = function(message, pricePerWord) {
//     const word = message.split(' ');
//     const length = word.length;
//     const total = length * pricePerWord;
//     return total;
//     }
//     console.log(
//         calculateEngravingPrice(
//           'Proin sociis natoque et magnis parturient montes mus',
//           10,
//         ),
//       ); 
      
//       console.log(
//         calculateEngravingPrice(
//           'Proin sociis natoque et magnis parturient montes mus',
//           20,
//         ),
//       );
//       console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); 

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); 

// TASK-3

// const findLongestWord = function(string) {
// const words = string.split(' ');
// let longesWord = words[0];

// for (const word of words) {
//     if (word.length > longesWord.length) {
//         longesWord = word;
//     }
// }
// return longesWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
// console.log(findLongestWord('Google do a roll')); 
// console.log(findLongestWord('May the force be with you'));

    // TASK-4

    // const formatString = function(string) {
    //   let stringAfter = null;
    //   if (string.length > 40) {
    //       stringAfter = string.slice(0, 40) + '...';
    //   }else {
    //     stringAfter = string;
    //   }
    //     return stringAfter;
    // }
    // console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
    // console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
    // console.log(formatString('Curabitur ligula sapien.'));
    // console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', ),);

    // TASK-5

    //     const checkForSpam = function(str) {
    //         const lowSpam = str.toLowerCase();

    //         if (lowSpam.includes("sale") || lowSpam.includes("spam")) {
    //                 return true;
    //             } else {
    //                  return false;
    //             }
    //         }

    // console.log(checkForSpam('Latest technology news'));
    // console.log(checkForSpam('JavaScript weekly newsletter')); 
    // console.log(checkForSpam('Get best sale offers now!')); 
    // console.log(checkForSpam('[SPAM] How to earn fast money?')); 

    // TASK-6

//     let input;
//     const numbers = [];
//     let total = 0;

//     do {

//     input = prompt("Введите число");
//     let number = Number(input);

//     numbers.push(number);

//     console.log(numbers);

//     if (!isNaN(number)) {

//     total += number;

//   } else alert("Было введено не число, попробуйте еще раз");

// } while (input !== null);

// alert(`Общая сумма чисел равна ${total}`);