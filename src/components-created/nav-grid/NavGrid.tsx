/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./nav-grid.css";

function NavGrid() {
  return (
    <div className="fw-nav-grid">
      <a href="/cats" className="fw-nav-grid__item">
        <div className="fw-nav-grid__img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-grid__img"
          />
        </div>
        <span className="fw-nav-grid__label">Hundewelpen</span>
      </a>
      <a href="/cats" className="fw-nav-grid__item">
        <div className="fw-nav-grid__img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-grid__img"
          />
        </div>
        <span className="fw-nav-grid__label">Junioren</span>
      </a>
      <a href="/cats" className="fw-nav-grid__item">
        <div className="fw-nav-grid__img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-grid__img"
          />
        </div>
        <span className="fw-nav-grid__label">Erwachsene Hunde</span>
      </a>
      <a href="/cats" className="fw-nav-grid__item">
        <div className="fw-nav-grid__img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-grid__img"
          />
        </div>
        <span className="fw-nav-grid__label">Senioren</span>
      </a>
      <a href="/cats" className="fw-nav-grid__item">
        <div className="fw-nav-grid__img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-grid__img"
          />
        </div>
        <span className="fw-nav-grid__label">Kätzchen</span>
      </a>
      <a href="/cats" className="fw-nav-grid__item">
        <div className="fw-nav-grid__img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-grid__img"
          />
        </div>
        <span className="fw-nav-grid__label">Erwachsene Katzen</span>
      </a>
    </div>
  );
}

export default NavGrid;
