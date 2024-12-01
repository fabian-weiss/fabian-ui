import React from "react";
import "./content-container.css";

function ContentContainer(props: {
  children: React.ReactNode;
  categoryName?: string;
  className?: string;
}) {
  return (
    <div
      className={`fw-content-container ${
        props.className ? props.className : ""
      }`}
    >
      {props.categoryName && (
        <h1 className="fw-content-container__headline">{props.categoryName}</h1>
      )}
      {props.children}
    </div>
  );
}

export default ContentContainer;
