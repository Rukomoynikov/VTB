
  var linkFoto = document.querySelector(".switch__toggle1");
  var linkFotoSecond = document.querySelector(".switch__toggle2");
  var carouselFoto = document.querySelector(".foto-carousel__first");
  var carouselFotoSecond = document.querySelector(".foto-carousel__second");
 

  linkFotoSecond.addEventListener("click", function(event) {
  
     if (carouselFotoSecond.classList.contains("carousel-hidden")) {
      carouselFotoSecond.classList.remove("carousel-hidden");
      carouselFoto.classList.add("carousel-hidden");
    } 
  });


  linkFoto.addEventListener("click", function(event) {
  
     if (carouselFoto.classList.contains("carousel-hidden")) {
      carouselFoto.classList.remove("carousel-hidden");
      carouselFotoSecond.classList.add("carousel-hidden");
    } 
  });






  
