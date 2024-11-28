/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./image-card-grid.css";

function ImageCardGrid() {
  return (
    <div className="fw-image-card__grid">
      <div className="fw-image-card">
        <img
          src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
          alt="Grid Image"
          className="fw-image-card__bg-image"
        />
        <div className="fw-image-card__content">
          <span className="fw-image-card__topline">Hunde</span>
          <h4 className="fw-image-card__title">Leckerlis</h4>
          <div className="fw-image-card__button light">Jetzt entdecken</div>
        </div>
      </div>
      <div className="fw-image-card">
        <img
          src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
          alt="Grid Image"
          className="fw-image-card__bg-image"
        />
        <div className="fw-image-card__content">
          <span className="fw-image-card__topline">Katzen</span>
          <h4 className="fw-image-card__title">Belohnungen</h4>
          <div className="fw-image-card__button light">Jetzt entdecken</div>
        </div>
      </div>
      <div className="fw-image-card">
        <img
          src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
          alt="Grid Image"
          className="fw-image-card__bg-image"
        />
        <div className="fw-image-card__content">
          <span className="fw-image-card__topline">Hunde</span>
          <h4 className="fw-image-card__title">Experten Ernährung</h4>
          <div className="fw-image-card__button primary">Jetzt entdecken</div>
        </div>
      </div>
    </div>
  );
}

export default ImageCardGrid;
