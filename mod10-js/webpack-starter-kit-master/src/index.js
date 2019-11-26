import './styles.css';
import menu from "./menu.json";
import template from './template.hbs'
import {
  inflate
} from 'zlib';

"use strict"
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ul = document.querySelector(".js-menu");
const input = document.querySelector(".js-switch-input");
const body = document.querySelector("body");

ul.insertAdjacentHTML("beforeend", template(menu));



if (localStorage.getItem('theme') !== null) {
  body.classList.add(localStorage.getItem('theme'));
  if (localStorage.getItem('theme') === Theme.DARK) {
    input.checked = true;
  }
}

input.addEventListener("change", () => {
  if (input.checked) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
})
