// JavaScript code to create the continuous sliding effect
const slideTrack = document.querySelector('.slide-trackC');
const slideItems = slideTrack.querySelectorAll('.slideC');
const slideWidth = slideItems[0].offsetWidth + parseInt(window.getComputedStyle(slideItems[0]).marginRight);
const totalWidth = slideWidth * slideItems.length;

// Duplicate the logos in the slide track
slideTrack.innerHTML += slideTrack.innerHTML;

slideTrack.style.width = `${totalWidth * 2}px`;
slideTrack.style.transform = 'translateX(0)'; // Set initial position to start

function slideLogos() {
  slideTrack.style.transition = 'none'; // Disable transition temporarily
  slideTrack.style.transform = 'translateX(0)'; // Reset position to start

  // Trigger reflow
  slideTrack.offsetWidth;

  slideTrack.style.transition = 'transform 8s linear'; // Enable transition
  slideTrack.style.transform = `translateX(${-totalWidth}px)`; // Slide to the left

  // Reset the position and restart the animation
  slideTrack.addEventListener('transitionend', () => {
    slideTrack.style.transition = 'none'; // Disable transition temporarily
    slideTrack.style.transform = 'translateX(0)'; // Reset position to start

    // Trigger reflow
    slideTrack.offsetWidth;

    slideTrack.style.transition = 'transform 8s linear'; // Enable transition
    slideTrack.style.transform = `translateX(${-totalWidth}px)`; // Slide to the left
  });
}

slideLogos(); // Call the function once to start the initial sliding

setInterval(slideLogos, 16000); // Adjust the interval time (in milliseconds) to match the transition duration