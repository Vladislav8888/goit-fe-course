"use strict"


// TASK-1


// const menu = document.querySelectorAll(".item");

// console.log(`В списке ${menu.length} категории`)

// menu.forEach(item => {
//     const title = item.querySelector("h2").textContent;
//     const about =item.querySelectorAll("ul li").length;


// console.log(`Категория: ${title} 
// Количество елементов: ${about}`)
// })


// TASK-2


// const ingredientsUl = document.querySelector("#ingredients");
// const fragment = document.createDocumentFragment();
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];
// ingredients.forEach(elem => {
//   const ingredientsLi = document.createElement("li");
//   ingredientsLi.textContent = elem;
//   fragment.append(ingredientsLi);
// });
// ingredientsUl.append(fragment);


// TASK-3


// const gallery = document.querySelector("#gallery");

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   }
// ];

// let string = "";

// images.forEach(image => {
//   string = `<li><img src="${image.url}" alt="${image.alt}" width='400px'<li>`;
//   gallery.insertAdjacentHTML("beforeend", string);
// });

// gallery.style.display = "flex";


// TASK-4


// const num = {
//   increment: document.querySelector('[data-action = "increment"]'),
//   decrement: document.querySelector('[data-action = "decrement"]'),
//   result: document.querySelector("#value")
// };

// let currentValue = 0;

// num.increment.addEventListener("click", () => {
//   currentValue++;
//   num.result.textContent = currentValue;
// });

// num.decrement.addEventListener("click", () => {
//   currentValue--;
//   num.result.textContent = currentValue;
// });


// TASK-5


// const name = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output")
// };

// name.input.addEventListener("input", event => {
//   const el = event.currentTarget.value;
//   name.output.textContent = el;
// });


// TASK-6


// const input = document.querySelector('#validation-input[data-length="6"]');

// let correctLength = input.dataset.length;

// input.addEventListener("blur", input => {
//   const element = input.currentTarget;
//   const inputLength = element.value.length;
//   if (correctLength == inputLength) {
//     element.classList.add("valid");
//   } else element.classList.add("invalid");
// });


// TASK-7


// const refs = {
//   control: document.querySelector("#font-size-control[type=range]"),
//   text: document.querySelector("#text")
// };

// refs.control.addEventListener("input", input => {
//   const value = input.currentTarget.value;
//   refs.text.style.fontSize = value + "px";
// });