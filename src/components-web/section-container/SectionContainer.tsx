import React from "react";
import "./section-container.css";
import ContentContainer from "../content-container/ContentContainer";

function SectionContainer(props: {
  children: React.ReactNode;
  categoryName?: string;
}) {
  return (
    <div className="fw-section-container">
      <ContentContainer categoryName={props.categoryName}>
        {props.children}
      </ContentContainer>
    </div>
  );
}

export default SectionContainer;
