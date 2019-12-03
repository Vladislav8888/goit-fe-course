'use strict';
import debounce from 'lodash.debounce';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

import fetchCountries from './fetchCountries.js';

const input = document.querySelector('input');
const ul = document.querySelector('ul');

function languagesMapper(item) {
  let languages = '';
  item.map(item => (languages += `<li>${item.name}</li>`));
  return languages;
}

input.addEventListener(
  'input',
  debounce(e => {
    let string = '';
    fetchCountries(e.target.value).then(data => {
      if (data.length > 10) {
        PNotify.error({
          title: "I'm an alert.",
          text: 'notice',
          hide: false,
        });
      }

      if (data.length >= 2 && data.length <= 10) {
        data.forEach(element => {
          string += `<li>${element.name}</li>`;
          ul.innerHTML = string;
        });
      }
      // <img src="${country.flag}">

      if (data.length === 1) {
        const [country] = data;
        console.log(country);
        ul.innerHTML = `
      <h1>${country.name}</h1>
      <h3>Capital: ${country.capital}</h3>
      <h3>Population: ${country.population}</h3>
      <p>Languages: <ul> ${languagesMapper(country.languages)}</ul></p>
      `;
      }
    });
  }, 500),
);
