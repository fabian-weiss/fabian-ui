function initializeImageCardSlider(sliderId) {
  const slider = document.getElementById(`${sliderId}`);
  if (!slider) {
    console.error(`Slider with ID "${sliderId}" not found.`);
    return;
  }

  const prevButton = slider.querySelector(".fw-slider-btn.prev");
  const nextButton = slider.querySelector(".fw-slider-btn.next");

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

  // Cleanup when the page is unloaded or when needed
  window.addEventListener("beforeunload", () => {
    if (intervalRef) {
      clearInterval(intervalRef);
    }
  });
}

// Initialize a specific slider
document.addEventListener("DOMContentLoaded", () => {
  initializeImageCardSlider("fw-image-card-slider-1");
});
