var slides = document.getElementsByClassName("slide");
var currentSlideIndex = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[currentSlideIndex].classList.add("active");
}

function nextSlide() {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex--;
  showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);
setInterval(nextSlide, 3000);