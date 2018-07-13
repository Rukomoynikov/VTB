
  var link = document.querySelector(".main-nav__toggle");
  var popup = document.querySelector(".side-menu");
  var popupMenu = document.querySelector(".main-nav");
  var popupBody = document.querySelector(".cards");
  var close = popup.querySelector(".log-out");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("side-menu-show");
    popupMenu.classList.add("main-nav-show");
    popupBody.classList.add("cards-show");
  });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("side-menu-show");
      popupMenu.classList.remove("main-nav-show");
      popupBody.classList.remove("cards-show");
    });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("side-menu-show")) {
        popup.classList.remove("side-menu-show");
      }
      if (popup.classList.contains("main-nav-show")) {
        popupMenu.classList.remove("main-nav-show");
      }
      if (popup.classList.contains("cards-show")) {
        popupBody.classList.remove("cards-show");
      }
    }
  });
