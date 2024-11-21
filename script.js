// let currentIndex1 = 0; // For the first slider
// let currentIndex2 = 0; // For the second slider

// const sliders = document.querySelectorAll(".image-slider");

// // Function to move the slider
// function moveSlider(sliderIndex, currentIndex) {
//   const translateX = -currentIndex * 100; // Move slides based on current index
//   sliders[sliderIndex].querySelector(".slides").style.transform = `translateX(${translateX}vw)`;
// }

// // Handle mouse wheel event
// window.addEventListener("wheel", (event) => {
//   const delta = Math.sign(event.deltaY); // Get scroll direction

//   // Handle the first slider (scroll down moves left)
//   if (delta > 0) {
//     currentIndex1 = (currentIndex1 + 1) % sliders[0].querySelectorAll(".slide").length;
//   } else {
//     currentIndex1 = (currentIndex1 - 1 + sliders[0].querySelectorAll(".slide").length) % sliders[0].querySelectorAll(".slide").length;
//   }

//   moveSlider(0, currentIndex1);

//   // Handle the second slider (scroll down moves right)
//   if (delta > 0) {
//     currentIndex2 = (currentIndex2 - 1 + sliders[1].querySelectorAll(".slide").length) % sliders[1].querySelectorAll(".slide").length;
//   } else {
//     currentIndex2 = (currentIndex2 + 1) % sliders[1].querySelectorAll(".slide").length;
//   }

//   moveSlider(1, currentIndex2);
// });

// // Handle touch events for mobile
// let startX = 0; // Starting X position for touch
// let endX = 0; // Ending X position for touch

// sliders.forEach((slider, index) => {
//   slider.addEventListener("touchstart", (event) => {
//     startX = event.touches[0].clientX; // Get the starting touch position
//   });

//   slider.addEventListener("touchmove", (event) => {
//     endX = event.touches[0].clientX; // Get the current touch position
//   });

//   slider.addEventListener("touchend", () => {
//     const deltaX = endX - startX; // Calculate the distance moved

//     // If the swipe is significant enough, change the slide
//     if (Math.abs(deltaX) > 50) { // Adjust the threshold as needed
//       if (deltaX > 0) {
//         // Swipe right
//         currentIndex1 = (currentIndex1 - 1 + sliders[0].querySelectorAll(".slide").length) % sliders[0].querySelectorAll(".slide").length;
//       } else {
//         // Swipe left
//         currentIndex1 = (currentIndex1 + 1) % sliders[0].querySelectorAll(".slide").length;
//       }
//       moveSlider(0, currentIndex1);
//     }
//   });
// });

let currentIndex1 = 0; // For the first slider
let currentIndex2 = 0; // For the second slider

const sliders = document.querySelectorAll(".image-slider");

// Function to move a slider
function moveSlider(slider, currentIndex) {
  const slides = slider.querySelector(".slides");
  const translateX = -currentIndex * 100; // Calculate slide position
  slides.style.transform = `translateX(${translateX}%)`;
}

// Handle desktop wheel events
window.addEventListener("wheel", (event) => {
  const delta = Math.sign(event.deltaY); // Detect scroll direction

  // First slider logic (left-to-right on scroll down)
  const slides1 = sliders[0].querySelectorAll(".slide").length;
  if (delta > 0) {
    currentIndex1 = (currentIndex1 + 1) % slides1;
  } else {
    currentIndex1 = (currentIndex1 - 1 + slides1) % slides1;
  }
  moveSlider(sliders[0], currentIndex1);

  // Second slider logic (right-to-left on scroll down)
  const slides2 = sliders[1].querySelectorAll(".slide").length;
  if (delta > 0) {
    currentIndex2 = (currentIndex2 - 1 + slides2) % slides2; // Reverse direction
  } else {
    currentIndex2 = (currentIndex2 + 1) % slides2; // Reverse direction
  }
  moveSlider(sliders[1], currentIndex2);
});

// Handle touch events for mobile
sliders.forEach((slider, index) => {
  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX; // Get the starting touch position
  });

  slider.addEventListener("touchmove", (event) => {
    endX = event.touches[0].clientX; // Get the current touch position
  });

  slider.addEventListener("touchend", () => {
    const deltaX = endX - startX; // Calculate the swipe distance
    const slides = slider.querySelectorAll(".slide").length;

    if (Math.abs(deltaX) > 50) {
      // Swipe threshold
      if (deltaX > 0) {
        // Swipe right
        if (index === 0) {
          currentIndex1 = (currentIndex1 - 1 + slides) % slides;
          moveSlider(slider, currentIndex1);
        } else {
          currentIndex2 = (currentIndex2 + 1) % slides; // Reverse direction
          moveSlider(slider, currentIndex2);
        }
      } else {
        // Swipe left
        if (index === 0) {
          currentIndex1 = (currentIndex1 + 1) % slides;
          moveSlider(slider, currentIndex1);
        } else {
          currentIndex2 = (currentIndex2 - 1 + slides) % slides; // Reverse direction
          moveSlider(slider, currentIndex2);
        }
      }
    }
  });
});

//Background Music
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-music");

  // Create a play button
  const playButton = document.createElement("button");
  playButton.innerText = "Play";

  // Add the class name to the button
  playButton.className = "play-button"; // or use playButton.classList.add("play-button");

  document.body.appendChild(playButton);

  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playButton.innerText = "Pause"; // Change button text to Pause
    } else {
      audio.pause();
      playButton.innerText = "Play"; // Change button text to Play
    }
  });
});
