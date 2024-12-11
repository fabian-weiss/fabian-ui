/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./category-list.css";

function CategoryGrid() {
  return (
    <div className="fw-nav-card-grid">
      <a href="/cats" className="fw-nav-card flex-center">
        <div className="fw-nav-card-img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-card-img"
          />
        </div>
        <span className="fw-nav-card-label primary">Hunde</span>
        <svg
          className="fw-chevron-right"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </a>
      <a href="/cats" className="fw-nav-card flex-center">
        <div className="fw-nav-card-img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-card-img"
          />
        </div>
        <span className="fw-nav-card-label primary">Katzen</span>
        <svg
          className="fw-chevron-right"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </a>
    </div>
  );
}

export default CategoryGrid;
