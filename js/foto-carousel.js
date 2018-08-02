
  // close.addEventListener("click", function(event) {
  //     event.preventDefault();
  //     popup.classList.remove("side-menu-show");
  //     popupMenu.classList.remove("main-nav-show");
  //     popupBody.classList.remove("cards-show");
  //   });

var linkFoto = document.querySelector(".switch__toggle1");
  var linkFotoSecond = document.querySelector(".switch__toggle2");

  // var linkFoto = document.getElementById("switch-1");
  // var linkFotoSecond = document.getElementById("switch-2");
  var carouselFoto = document.querySelector(".foto-carousel__first");
  var carouselFotoSecond = document.querySelector(".foto-carousel__second");
 
  // var close = popup.querySelector(".log-out");
  

  linkFotoSecond.addEventListener("click", function(event) {
        // event.preventDefault();
  
     if (carouselFotoSecond.classList.contains("carousel-hidden")) {
      carouselFotoSecond.classList.remove("carousel-hidden");
    carouselFoto.classList.add("carousel-hidden");
  } 


  });


linkFoto.addEventListener("click", function(event) {
        // event.preventDefault();
  
     if (carouselFoto.classList.contains("carousel-hidden")) {
      carouselFoto.classList.remove("carousel-hidden");
    carouselFotoSecond.classList.add("carousel-hidden");
  } 


  });



//   linkFoto.addEventListener("click", function(event) {
//         event.preventDefault();
//   // if (carouselFoto.classList.contains("carousel-hidden")) {
//     carouselFoto.classList.remove("carousel-hidden");
//     carouselFotoSecond.classList.add ("carousel-hidden");
//   } 

// // }
//   });


 





// linkFotoSecond.addEventListener("click", function(event) {
//         event.preventDefault();
//   if (carouselFotoSecond.classList.contains("carousel-hidden")) {
//     carouselFotoSecond.classList.remove("carousel-hidden");
    
//   } else {
//     carouselFotoSecond.classList.add("carousel-hidden");
      
//   }

//   });




  
