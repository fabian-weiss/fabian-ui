/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import "./image-gallery.css";

function ImageGallery() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures DOM is available
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const indicators = document.querySelectorAll<HTMLSpanElement>(
      ".fw-image-gallery-indicator"
    );
    const slider = document.querySelector<HTMLDivElement>(
      ".fw-image-gallery-content-wrapper"
    );

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

    return () => {
      // Clean up event listeners
      indicators.forEach((indicator) => {
        indicator.removeEventListener("click", updateSlider);
      });
    };
  }, [isClient]);

  if (!isClient) return null; // Prevent rendering on server

  return (
    <div className="fw-image-gallery-container">
      <div className="fw-image-gallery-content-wrapper">
        <div className="fw-image-gallery-entry">
          <img
            className="fw-image-gallery-entry__img"
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="Gallery Image"
          />
          <div className="fw-image-gallery-entry__content-wrapper">
            <span className="fw-image-gallery-entry__topline">Hunde</span>
            <h4 className="fw-image-gallery-entry__title">Leckerlis</h4>
            <div className="fw-image-gallery-entry__button light">
              Jetzt entdecken
            </div>
          </div>
        </div>
        <div className="fw-image-gallery-entry">
          <img
            className="fw-image-gallery-entry__img"
            src="https://gravity.zenit.design/media/92/3c/93/1721735796/Gravity-Set-1-Banner-SM-4.webp?ts=1721735796"
            alt="Gallery Image"
          />
          <div className="fw-image-gallery-entry__content-wrapper">
            <span className="fw-image-gallery-entry__topline">Katzen</span>
            <h4 className="fw-image-gallery-entry__title">Belohnungen</h4>
            <div className="fw-image-gallery-entry__button light">
              Jetzt ansehen
            </div>
          </div>
        </div>
      </div>
      <div className="fw-image-gallery-indicators">
        <span className="fw-image-gallery-indicator active"></span>
        <span className="fw-image-gallery-indicator"></span>
      </div>
    </div>
  );
}

export default ImageGallery;
