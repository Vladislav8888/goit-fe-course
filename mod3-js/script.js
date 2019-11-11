"use strict";


// TASK-1======================================


// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.hobby = "javascript";
// user.mood = "happy";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key in user) {
//   console.log(`${key}:`, user[key]);
// }


// TASK-2=====================================


// const countProps = obj => {
//   const keys = Object.keys(obj);

//   return keys.length;
// };

// console.log(countProps({}));

// console.log(countProps({ name: "Mango", age: 2 }));

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// TASK-3=====================================


// const findBestEmployee = employees => {
//   let tasks = 0;
//   let name = null;

//   const keys = Object.keys(employees);

//   for (const key of keys) {
//     if (tasks < employees[key]) {
//       tasks = employees[key];
//       name = key;
//     }
//   }

//   return name;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   })
// );

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4
//   })
// );

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38
//   })
// );


// TASK-4=====================================

// const countTotalSalary = employees => {
//   let total = 0;

//   for (let key in employees) {
//     total += employees[key];
//   }

//   return total;
// };

// console.log(countTotalSalary({}));

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// );

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150
//   })
// );


// TASK-5=====================================


// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = (arr, prop) => {
//   const values = [];

//   for (const product of arr) {
//     if (prop in product) {
//       values.push(product[prop]);
//     }
//   }

//   return values;
// };

// console.log(getAllPropValues(products, "name"));

// console.log(getAllPropValues(products, "quantity"));

// console.log(getAllPropValues(products, "category"));


// TASK-6=====================================


// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = (arr, productName) => {
//   for (const product of arr) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
// };

// console.log(calculateTotalPrice(products, "Радар"));

// console.log(calculateTotalPrice(products, "Дроид"));