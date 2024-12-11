/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./icon-text-grid.css";

function IconTextGrid() {
  return (
    <div className="fw-icon-text-grid">
      <div className="fw-icon-text-content-wrapper">
        <img
          src="https://cdn.shopware.store/U/x/n/4CzQg/media/7e/90/6b/1733947476/tlapka-red.svg?ts=1733947476"
          alt="Heart Icon"
          className="fw-icon-text-image"
        />
        <p className="fw-icon-text-text">Höchste Qualität</p>
      </div>
      <div className="fw-icon-text-content-wrapper">
        <img
          src="https://cdn.shopware.store/U/x/n/4CzQg/media/58/72/e0/1733947384/heart-red.svg?ts=1733947384"
          alt="Heart Icon"
          className="fw-icon-text-image"
        />
        <p className="fw-icon-text-text">Reich an Vitaminen</p>
      </div>
      <div className="fw-icon-text-content-wrapper">
        <img
          src="https://cdn.shopware.store/U/x/n/4CzQg/media/95/99/d7/1733947384/miska-red.svg?ts=1733947384"
          alt="Heart Icon"
          className="fw-icon-text-image"
        />
        <p className="fw-icon-text-text">Nährhafte Proteinquelle</p>
      </div>
      <div className="fw-icon-text-content-wrapper">
        <img
          src="https://cdn.shopware.store/U/x/n/4CzQg/media/ef/6e/2e/1733947384/fonendoskop-red.svg?ts=1733947384"
          alt="Heart Icon"
          className="fw-icon-text-image"
        />
        <p className="fw-icon-text-text">Klinisch getestet</p>
      </div>
    </div>
  );
}

export default IconTextGrid;
