document.addEventListener("DOMContentLoaded", function () {
  // Initial setup for section height and position
  const progressLine = document.querySelector(".fw-timeline-progress-line");
  const sectionElement = document.querySelector(".fw-timeline-container");

  if (!progressLine || !sectionElement) {
    return; // Exit if the required elements are not found
  }

  let sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
  let sectionHeight = sectionElement.offsetHeight;

  // Function to handle scroll and update progress bar height
  function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const offset = windowHeight / 2;
    if (scrollY + offset > sectionTop) {
      const progressPercent = Math.min(
        ((scrollY - sectionTop + offset) / sectionHeight) * 100,
        100
      );
      // Update the height of the progress line based on scroll progress
      progressLine.style.height = `${progressPercent}%`;
    } else {
      progressLine.style.height = "0%";
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  // Cleanup event listener when the page is unloaded
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll", handleScroll);
  });
});
