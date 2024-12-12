/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./description-card-slider.css";
import "../description-card.css";

function DescriptionCardSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  const visibleSlides = (): number => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1100) {
      return 2;
    } else return 3;
  };

  const handleButtonVisibility = () => {
    if (sliderRef.current == null) {
      return;
    }
    const slider = sliderRef.current;
    const numberOfSliderChildren = slider.children.length;
    const scrollLeft = slider.scrollLeft;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    const prevButton: HTMLDivElement | null = slider.querySelector(
      `.fw-slider-btn-broad.prev`
    );
    const nextButton: HTMLDivElement | null = slider.querySelector(
      ".fw-slider-btn-broad.next"
    );

    // If there are fewer slides than visible, hide buttons
    if (prevButton && nextButton) {
      if (numberOfSliderChildren <= visibleSlides()) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
        return;
      }

      // Handle button visibility based on scroll position
      prevButton.style.display = scrollLeft <= 0 ? "none" : "flex";
      nextButton.style.display = scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
  };

  const handleScroll = (forward: boolean) => {
    if (sliderRef.current != null) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.children[0].clientWidth + 40;
      const newIndex = Math.round(scrollLeft / itemWidth);
      const newScrollPos = newIndex * itemWidth;

      resetInterval();

      if (newIndex >= sliderRef.current.children.length - visibleSlides()) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      sliderRef.current.scrollTo({
        left: forward ? newScrollPos + itemWidth : newScrollPos - itemWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        handleButtonVisibility();
      }, 300);
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => handleScroll(true), 5000);
  };

  const handleShowDetails = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(index);
    }

    console.log("Handle show details");
  };

  useEffect(() => {
    resetInterval();
    handleButtonVisibility();
    window.addEventListener("resize", handleButtonVisibility);
    return () => {
      window.removeEventListener("resize", handleButtonVisibility);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="fw-description-card-slider-container">
      <div
        id="fw-description-card-slider-1"
        ref={sliderRef}
        className="fw-description-card-slider"
      >
        <div className="fw-description-card fw-description-card-slider-entry">
          <div className="fw-description-card-content-wrapper">
            <img
              src="https://cdn.shopware.store/U/x/n/4CzQg/media/e4/10/06/1734029869/huhn.webp?ts=1734029869"
              alt="Description Card Image"
              className="fw-description-card-image"
            />
            <div
              className={`fw-description-card-details ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <p>Hello World</p>
            </div>
          </div>
          <div
            className="fw-description-card-label-row"
            onClick={() => handleShowDetails(0)}
          >
            <span className="fw-description-card-label">Ente</span>
            <svg
              className={`fw-description-card-icon ${
                activeIndex === 0 ? "active" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
        </div>
        <div className="fw-description-card fw-description-card-slider-entry">
          <div className="fw-description-card-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt="Description Card Image"
              className="fw-description-card-image"
            />
            <div
              className={`fw-description-card-details ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <p>Hello World</p>
            </div>
          </div>
          <div
            className="fw-description-card-label-row"
            onClick={() => handleShowDetails(1)}
          >
            <span className="fw-description-card-label">Hunde</span>
            <svg
              className={`fw-description-card-icon ${
                activeIndex === 1 ? "active" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
        </div>
        <div className="fw-description-card fw-description-card-slider-entry">
          <div className="fw-description-card-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt="Description Card Image"
              className="fw-description-card-image"
            />
            <div
              className={`fw-description-card-details ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <p>Hello World</p>
            </div>
          </div>
          <div
            className="fw-description-card-label-row"
            onClick={() => handleShowDetails(2)}
          >
            <span className="fw-description-card-label">Hunde</span>
            <svg
              className={`fw-description-card-icon ${
                activeIndex === 2 ? "active" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
        </div>
        <svg
          className="fw-slider-btn-broad prev"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
          onClick={() => handleScroll(false)}
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
        <svg
          className="fw-slider-btn-broad next"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
          onClick={() => handleScroll(true)}
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default DescriptionCardSlider;
