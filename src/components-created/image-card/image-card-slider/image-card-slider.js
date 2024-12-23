function initializeImageCardSlider(sliderId, sliderContainerId) {
  const sliderContainer = document.getElementById(`${sliderContainerId}`);
  const slider = document.getElementById(`${sliderId}`);
  var intervalRef = null;
  if (!slider) {
    console.error(`Slider with ID "${sliderId}" not found.`);
    return;
  }

  const prevButton = sliderContainer.querySelector(`.fw-slider-btn.prev`);
  const nextButton = sliderContainer.querySelector(".fw-slider-btn.next");

  // Function to get the number of visible slides based on the screen width
  const visibleSlides = () => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1100) {
      return 2;
    } else {
      return 3;
    }
  };

  // Function to handle if buttons should be visible or not
  const handleButtonVisibility = () => {
    const numberOfSliderChildren = slider.children.length;
    if (numberOfSliderChildren <= visibleSlides()) {
      prevButton.style.display = "none";
      nextButton.style.display = "none";
    } else {
      prevButton.style.display = "flex";
      nextButton.style.display = "flex";
    }
  };

  // Function to handle scroll (forward or backward)
  const handleScroll = (forward) => {
    if (slider) {
      const scrollLeft = slider.scrollLeft;
      const itemWidth = slider.children[0].clientWidth + 40; // Adding margin (if any)
      const newIndex = Math.round(scrollLeft / itemWidth);
      const newScrollPos = newIndex * itemWidth;

      resetInterval();

      // If we are at the end, loop back to the start
      if (newIndex >= slider.children.length - visibleSlides()) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      // Scroll to the new position based on direction
      slider.scrollTo({
        left: forward ? newScrollPos + itemWidth : newScrollPos - itemWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to reset the interval for auto-scrolling
  const resetInterval = () => {
    if (intervalRef) {
      clearInterval(intervalRef);
    }
    intervalRef = setInterval(() => handleScroll(true), 5000);
  };

  // Add event listeners for the buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => handleScroll(false)); // Scroll backward
    nextButton.addEventListener("click", () => handleScroll(true)); // Scroll forward
  }

  // Start the interval for auto-scrolling
  resetInterval();

  // Handle visibility of buttons
  handleButtonVisibility();

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    handleButtonVisibility();
  });

  window.addEventListener("scroll", () => {
    resetInterval();
  });

  // Cleanup when the page is unloaded or when needed
  window.addEventListener("beforeunload", () => {
    if (intervalRef) {
      clearInterval(intervalRef);
    }
  });
}

// Initialize a specific slider
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  initializeImageCardSlider(
    "fw-image-card-slider-1",
    "fw-image-card-slider-container-1"
  );
  initializeImageCardSlider(
    "fw-image-card-slider-2",
    "fw-image-card-slider-container-2"
  );
  // initializeImageCardSlider(
  //   "fw-image-card-slider-3",
  //   "fw-image-card-slider-container-3"
  // );
});
