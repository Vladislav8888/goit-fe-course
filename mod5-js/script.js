"use strict"

// TASK-1


//  const Account = function(login, email) {
//       this.login = login;
//       this.email = email;
//     };
    
//     Account.prototype.getInfo = function() {
//       console.log(`Login: ${this.login}, Email: ${this.email}`);
//     };
    
//     console.log(Account.prototype.getInfo); // function
    
//     const mango = new Account("Mangozedog", "mango@dog.woof");
//     mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
    
//     const poly = new Account("Poly", "poly@mail.com");
//     poly.getInfo(); // Login: Poly, Email: poly@mail.com


// TASK-2


// class User {
//       constructor({ name, age, followers }) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//       }
//     }
    
//     User.prototype.getInfo = function() {
//       console.log(
//         `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//       );
//     };
    
//     const mango = new User({ name: "Mango", age: 2, followers: 20 });
//     mango.getInfo(); // User Mango is 2 years old and has 20 followers
    
//     const poly = new User({ name: "Poly", age: 3, followers: 17 });
//     poly.getInfo(); // User Poly is 3 years old and has 17 followers


    // TASK-3


    // class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items = [...items, item];
//   }

//   removeItem(item) {
//     this.items = this.items.filter(i => i !== item);
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор"
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// TASK-4


// class StringBuilder {
//   constructor(_value) {
//     this.value = _value;
//   }

//   set values(string) {
//     return this.value = string;
//   }
//   get values() {
//     return this.value;
//   }

//   append(str) {
//     this.value = this.values + str;
//   }

//   prepend(str) {
//     this.value = str + this.values;
//   }

//   pad(str) {
//     this.value = str + this.values + str;
//   }
// }
// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='


// TASK-5

// class Car {
//   constructor({ price, maxSpeed }) {
//     this.speed = 0;
//     this._price = price;
//     this._maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   static getSpecs(car) {
//     return console.log(`
//       maxSpeed: ${car._maxSpeed}, 
//       speed: ${car.speed}, 
//       isOn: ${car.isOn}, 
//       distance: ${car.distance}, 
//       price: ${car._price}`);
//   }

//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     this._price = value;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     if (value <= this._maxSpeed) {
//       return (this.speed += value);
//     }
//     return this.speed;
//   }

//   decelerate(value) {
//     if (this.speed > 0) {
//       this.speed = this.speed - value;
//     }
//     return this.speed;
//   }

//   drive(hours) {
//     if ((this.isOn = true)) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000