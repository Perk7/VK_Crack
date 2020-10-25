function openLoadGame() {
  let page = document.querySelector('.load-page')
  page.removeAttribute('hidden')
  let shadow = document.querySelector('.shadow-popup')
  shadow.removeAttribute('hidden')
}

function openSupport() {
  let page = document.querySelector('.support-page')
  page.removeAttribute('hidden')
  let shadow = document.querySelector('.shadow-popup')
  shadow.removeAttribute('hidden')
}

function closePopup() {
  let page1 = document.querySelector('.load-page')
  let page2 = document.querySelector('.support-page')
  let shadow = document.querySelector('.shadow-popup')
  page1.setAttribute('hidden', 'true')
  page2.setAttribute('hidden', 'true')
  shadow.setAttribute('hidden', 'true')
}

let load_btn = document.querySelector("#load_game");
let support = document.querySelector("#support");

let quit = document.querySelectorAll(".popup__close-btn");

load_btn.addEventListener("click", openLoadGame);
support.addEventListener("click", openSupport);

quit[0].addEventListener("click", closePopup);
quit[1].addEventListener("click", closePopup);