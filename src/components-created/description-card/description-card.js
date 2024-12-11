document.addEventListener("DOMContentLoaded", () => {
  const handleDescriptionCard = () => {
    // Attach event listeners to all label rows on the page
    document
      .querySelectorAll(".fw-description-card-label-row")
      .forEach((labelRow) => {
        labelRow.addEventListener("click", () => {
          // Find the parent description card of the clicked label row
          const descriptionCard = labelRow.closest(".fw-description-card");
          if (!descriptionCard) return;

          // Toggle the active state of the clicked card only
          const detailsElement = descriptionCard.querySelector(
            ".fw-description-card-details"
          );
          const iconElement = descriptionCard.querySelector(
            ".fw-description-card-icon"
          );

          const isActive = detailsElement.classList.contains("active");

          if (isActive) {
            detailsElement.classList.remove("active");
            iconElement.classList.remove("active");
          } else {
            detailsElement.classList.add("active");
            iconElement.classList.add("active");
          }

          console.log("Card toggled active state:", !isActive);
        });
      });
  };

  handleDescriptionCard();
});
