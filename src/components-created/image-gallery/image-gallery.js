document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".fw-image-gallery-indicator");
  const slider = document.querySelector(".fw-image-gallery-content-wrapper");

  if (!slider || indicators.length === 0) return;

  let currentSlide = 0;

  const updateSlider = () => {
    slider.style.transform = `translateY(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  };

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    indicators.forEach((indicator) => {
      indicator.removeEventListener("click", updateSlider);
    });
  });
});
