import React from "react";
import "./section-container.css";
import ContentContainer from "../content-container/ContentContainer";

function SectionContainer(props: {
  children: React.ReactNode;
  categoryName?: string;
  contentClassName?: string;
  sectionClassName?: string;
}) {
  return (
    <div
      className={`fw-section-container ${
        props.sectionClassName ? props.sectionClassName : ""
      }`}
    >
      <ContentContainer
        className={props.contentClassName}
        categoryName={props.categoryName}
      >
        {props.children}
      </ContentContainer>
    </div>
  );
}

export default SectionContainer;
