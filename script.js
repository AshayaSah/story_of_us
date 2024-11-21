let currentIndex1 = 0; // For the first slider
let currentIndex2 = 0; // For the second slider

const sliders = document.querySelectorAll('.image-slider');

window.addEventListener('wheel', (event) => {
  const delta = Math.sign(event.deltaY); // Get scroll direction

  // Handle the first slider (scroll down moves left)
  if (delta > 0) {
    currentIndex1 = (currentIndex1 + 1) % sliders[0].querySelectorAll('.slide').length;
  } else {
    currentIndex1 = (currentIndex1 - 1 + sliders[0].querySelectorAll('.slide').length) % sliders[0].querySelectorAll('.slide').length;
  }

  // Move the first slider
  const translateX1 = -currentIndex1 * 100; // Move slides based on current index
  sliders[0].querySelector('.slides').style.transform = `translateX(${translateX1}vw)`;

  // Handle the second slider (scroll down moves right)
  if (delta > 0) {
    currentIndex2 = (currentIndex2 - 1 + sliders[1].querySelectorAll('.slide').length) % sliders[1].querySelectorAll('.slide').length;
  } else {
    currentIndex2 = (currentIndex2 + 1) % sliders[1].querySelectorAll('.slide').length;
  }

  // Move the second slider
  const translateX2 = -currentIndex2 * 100; // Move slides based on current index
  sliders[1].querySelector('.slides').style.transform = `translateX(${translateX2}vw)`;
});