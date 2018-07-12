var link = document.querySelector(".main-nav__toggle");
  var popup = document.querySelector(".side-menu");
  // var close = popup.querySelector(".right-menu-close");
  


  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("side-menu-show");
  });

  // close.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   popup.classList.remove("right-menu-show");
  // });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("side-menu-show")) {
        popup.classList.remove("side-menu-show");
      }
    }
  });



// var link = document.querySelector(".search");
//   var pop = document.querySelector(".active-header");
//   var close = popup.querySelector(".right-menu-close");
  

//   link.addEventListener("click", function(event) {
//     event.preventDefault();
//     pop.classList.add("active-header-show");
   
//   });

//   close.addEventListener("click", function(event) {
//     event.preventDefault();
//     pop.classList.remove("active-header-show");
//   });

//     window.addEventListener("keydown", function(event) {
//     if (event.keyCode === 27) {
//       if (pop.classList.contains("active-header-show")) {
//         pop.classList.remove("active-header-show");
//       }
//     }
//   });

