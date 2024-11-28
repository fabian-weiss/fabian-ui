import React from "react";
import "./category-list.css";

function CategoryList() {
  return (
    <div className="fw-nav-card-column">
      <a href="/cats" className="fw-nav-card">
        <div className="fw-nav-card-img-wrapper">
          <img
            src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
            alt="category"
            className="fw-nav-card-img"
          />
        </div>
        <span className="fw-nav-card-label">Hundefutter</span>
      </a>
    </div>
  );
}

export default CategoryList;
