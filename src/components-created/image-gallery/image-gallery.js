document.addEventListener("DOMContentLoaded", () => {
  const indicators = document.querySelectorAll(".fw-image-gallery-indicator");

  let currentSlide = 0;

  function updateSlider() {
    const slider = document.querySelector(".fw-image-gallery-content-wrapper");
    slider.style.transform = `translateY(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });
});
