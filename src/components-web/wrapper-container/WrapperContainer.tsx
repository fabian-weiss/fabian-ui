import React from "react";
import "./wrapper-container.css";

/** Wrapper for a created widget */

function WrapperContainer(props: {
  children: React.ReactNode;
  widgetName: string;
}) {
  return (
    <div className="fw-wrapper-container">
      <h3 className="fw-wrapper-container__headline">{props.widgetName}</h3>
      <div className="fw-wrapper-container__content">{props.children}</div>
    </div>
  );
}

export default WrapperContainer;
