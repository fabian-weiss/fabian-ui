/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./cta-banner.css";

function CtaBanner() {
  return (
    <a href="#" className="fw-cta-banner-container">
      <img
        src="https://gravity.zenit.design/media/73/6c/76/1721736766/Gravity-Set-1-Banner-SM-3.webp?ts=1721736766"
        alt="Dog img"
        className="fw-cta-banner-img"
      />
      <div className="fw-cta-banner-content-wrapper fw-glas-backdrop">
        <span className="fw-cta-banner-badge">Bestes Angebot</span>
        <h4 className="fw-cta-banner-title">My Life Leckerlis</h4>
        <div className="fw-btn fw-btn-light">Jetzt kaufen</div>
      </div>
    </a>
  );
}

export default CtaBanner;
