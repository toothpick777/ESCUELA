const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderArrows = document.querySelectorAll('.slider-arrow');

let currentSlide = 0;


  
function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = sliderItems.length - 1;
  } else if (slideIndex >= sliderItems.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex * 1289}px)`;
  currentSlide = slideIndex;
}

showSlide(currentSlide);

sliderArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const direction = arrow.classList.contains('slider-arrow-left') ? -1 : 1;
    showSlide(currentSlide + direction);
    moveSlider()
  });
});

function moveSlider(direction) {
    if (direction === 'left') {
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
    } else {
      index++;
      if (index >= images.length) {
        index = 0;
      }
    }
    slider.style.transform = `translateX(-${index * 1289}px)`;
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
    images[index].classList.add('active');
  }