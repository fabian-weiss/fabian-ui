/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import "./image-card-slider.css";
import "../image-card.css";

function ImageCardSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visibleSlides = (): number => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1100) {
      return 2;
    } else return 3;
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
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => handleScroll(true), 5000);
  };

  useEffect(() => {
    // resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="fw-image-card-slider-container">
      <div
        id="fw-image-card-slider-1"
        ref={sliderRef}
        className="fw-image-card-slider"
      >
        <a
          href="#"
          className="fw-image-card fw-image-card-slider-entry flex-end"
        >
          <img
            src="https://cdn.shopware.store/U/x/n/4CzQg/media/ee/f5/c1/1734528857/junior_large_breed_square.png?ts=1734528857"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-light">
            <span className="fw-image-card__topline">Calibra</span>
            <h4 className="fw-image-card__title">Veterinary</h4>
            <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
          </div>
        </a>
        <div className="fw-image-card fw-image-card-slider-entry flex-start">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="Grid Image"
            className="fw-image-card__bg-image fw-full-width"
          />
          <div className="fw-image-card__content text-dark">
            <span className="fw-image-card__topline">Katzen</span>
            <h4 className="fw-image-card__title">Belohnungen</h4>
            <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
          </div>
        </div>
        <div className="fw-image-card fw-image-card-slider-entry flex-start">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-dark">
            <span className="fw-image-card__topline">Katzen</span>
            <h4 className="fw-image-card__title">Belohnungen</h4>
            <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
          </div>
        </div>
        <div className="fw-image-card fw-image-card-slider-entry flex-start">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-dark">
            <span className="fw-image-card__topline">Katzen</span>
            <h4 className="fw-image-card__title">Belohnungen</h4>
            <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
          </div>
        </div>
        <div className="fw-image-card fw-image-card-slider-entry flex-start">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-dark">
            <span className="fw-image-card__topline">Katzen</span>
            <h4 className="fw-image-card__title">Belohnungen</h4>
            <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
          </div>
        </div>
        <div className="fw-image-card fw-image-card-slider-entry flex-start">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-dark">
            <span className="fw-image-card__topline">Katzen</span>
            <h4 className="fw-image-card__title">Belohnungen</h4>
            <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
          </div>
        </div>
        <div className="fw-image-card fw-image-card-slider-entry flex-end">
          <img
            src="https://gravity.zenit.design/media/73/6c/76/1721736766/Gravity-Set-1-Banner-SM-3.webp?ts=1721736766"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-light">
            <span className="fw-image-card__topline">Hunde</span>
            <h4 className="fw-image-card__title">Experten Ernährung</h4>
            <div className="fw-btn fw-btn-primary">Jetzt entdecken</div>
          </div>
        </div>
        <div className="fw-image-card fw-image-card-slider-entry hover-opacity">
          <img
            src="https://gravity.zenit.design/media/73/6c/76/1721736766/Gravity-Set-1-Banner-SM-3.webp?ts=1721736766"
            alt="Grid Image"
            className="fw-image-card__bg-image"
          />
          <div className="fw-image-card__content text-light">
            <span className="fw-image-card__topline">Hunde</span>
            <h4 className="fw-image-card__title">Experten Ernährung</h4>
            <div className="fw-btn fw-btn-primary">Jetzt entdecken</div>
          </div>
        </div>
      </div>
      <svg
        className="fw-slider-btn prev"
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
        className="fw-slider-btn next"
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
  );
}

export default ImageCardSlider;
