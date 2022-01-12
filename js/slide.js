document.addEventListener("DOMContentLoaded", () => {


  var slideIndex = 0;
  showSlides();
var id;
  function showSlides() {

    var slides = document.getElementsByClassName("slider");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    id = setTimeout(showSlides, 2000);
  }

  


})