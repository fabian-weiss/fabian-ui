/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../image-card.css";

function ImageCardGrid() {
  return (
    <div className="fw-image-card__grid">
      <div className="fw-image-card flex-end">
        <img
          src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
          alt="Grid Image"
          className="fw-image-card__bg-image"
        />
        <div className="fw-image-card__content text-light">
          <span className="fw-image-card__topline">Hunde</span>
          <h4 className="fw-image-card__title">Leckerlis</h4>
          <div className="fw-btn fw-btn-light">Jetzt entdecken</div>
        </div>
      </div>
      <div className="fw-image-card flex-start">
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
      <div className="fw-image-card flex-end">
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
      <div className="fw-image-card hover-opacity">
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
  );
}

export default ImageCardGrid;
