
var link = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".side-menu");
var popupBody = document.querySelector(".main-nav");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("side-menu-show");
  popupBody.classList.add("main-nav-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("side-menu-show")) {
      popup.classList.remove("side-menu-show");
    }
  }
});
