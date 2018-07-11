var link = document.querySelector(".search");
  var popup = document.querySelector(".right-menu");
  var close = popup.querySelector(".right-menu-close");
  


  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("right-menu-show");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("right-menu-show");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("right-menu-show")) {
        popup.classList.remove("right-menu-show");
      }
    }
  });



var link = document.querySelector(".search");
  var pop = document.querySelector(".active-header");
  var close = popup.querySelector(".right-menu-close");
  

  link.addEventListener("click", function(event) {
    event.preventDefault();
    pop.classList.add("active-header-show");
   
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    pop.classList.remove("active-header-show");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (pop.classList.contains("active-header-show")) {
        pop.classList.remove("active-header-show");
      }
    }
  });

