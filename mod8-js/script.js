import gallery from "./gallery.js"

'use strict'

const ul = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const img = document.querySelector(".lightbox__image");
const btn = document.querySelector(".lightbox__button");
const content = document.querySelector(".lightbox__content");
const overlay = document.querySelector(".lightbox__overlay");


const createImg = arr => {
  const img = arr.map(el => {

    return `<li class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/><span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span></a></li>`
  });
  ul.insertAdjacentHTML("beforeend", img.join(""));
}
createImg(gallery);

ul.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal.classList.add("is-open");
  img.setAttribute("src", event.target.dataset.source);
  img.setAttribute("alt", event.target.alt);
});

modal.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON" || event.target.nodeName == "I" || event.target == content) {
    modal.classList.remove("is-open");
    img.setAttribute("src", "");
    img.setAttribute("alt", "");
  }
})

let arrSlider = [];
gallery.forEach(item => {
  arrSlider.push(item.original);
})

window.addEventListener("keydown", event => {
  if (event.keyCode === 27) {
    modal.classList.remove("is-open");
    img.setAttribute("src", "");
    img.setAttribute("alt", "");
  }

  let index = arrSlider.indexOf(img.src);

  if (event.keyCode === 39) {
    if (index < arrSlider.length - 1) {
      img.setAttribute("src", arrSlider[index + 1])
    } else {
      index = -1;
      img.setAttribute("src", arrSlider[index + 1]);
    }
  }
  if (event.keyCode === 37) {
    if (index === 0) {
      index = arrSlider.length;
      img.setAttribute("src", arrSlider[index - 1]);
    } else {
      img.setAttribute("src", arrSlider[index - 1]);
    }
  }


})