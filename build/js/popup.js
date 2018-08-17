var popup = document.querySelector(".side-menu");
var popupMenu = document.querySelector(".main-nav");
var popupBody = document.querySelector(".cards");

$(document).on("click", ".main-nav__toggle", function(event) {
  event.preventDefault();
  
  if (popup.classList.contains("side-menu-show")) {
    popup.classList.remove("side-menu-show");
    popupMenu.classList.remove("main-nav-show");
    popupBody.classList.remove("cards-show");
  } else {
    popup.classList.add("side-menu-show");
    popupMenu.classList.add("main-nav-show");
    popupBody.classList.add("cards-show");    
  }

});



$(document).on("click", ".log-out", function(event) {
  event.preventDefault();

  popup.classList.remove("side-menu-show");
  popupMenu.classList.remove("main-nav-show");
  popupBody.classList.remove("cards-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("side-menu-show")) {
      popup.classList.remove("side-menu-show");
      popupMenu.classList.remove("main-nav-show");
      popupBody.classList.remove("cards-show");
    }
  }
});
