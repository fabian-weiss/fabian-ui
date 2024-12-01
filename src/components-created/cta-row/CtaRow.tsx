/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./cta-row.css";

function CtaRow() {
  return (
    <div className="fw-cta-row-container">
      <a href="#" className="fw-cta-row-entry">
        <img
          src="https://gravity.zenit.design/media/73/6c/76/1721736766/Gravity-Set-1-Banner-SM-3.webp?ts=1721736766"
          alt="Dog img"
          className="fw-cta-row-entry-img"
        />
        <div className="fw-cta-row-entry-content-wrapper">
          <span className="fw-cta-row-entry-topline">Neuigkeiten</span>
          <h4 className="fw-cta-row-entry-title">Vita Snacks</h4>
          <div className="fw-btn fw-btn-light">Jetzt kaufen</div>
        </div>
      </a>
      <a href="#" className="fw-cta-row-entry">
        <img
          src="https://gravity.zenit.design/media/73/6c/76/1721736766/Gravity-Set-1-Banner-SM-3.webp?ts=1721736766"
          alt="Dog img"
          className="fw-cta-row-entry-img"
        />
        <div className="fw-cta-row-entry-content-wrapper fw-text-dark fw-center-left fw-glas-backdrop">
          <span className="fw-cta-row-entry-topline">Bestes Angebot</span>
          <h4 className="fw-cta-row-entry-title">My Life Leckerlis</h4>
          <div className="fw-btn fw-btn-primary">Jetzt kaufen</div>
        </div>
      </a>
    </div>
  );
}

export default CtaRow;
