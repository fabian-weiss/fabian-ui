import CategoryList from "@/components-created/category-list/CategoryList";
import ImageCardGrid from "@/components-created/image-card-grid/ImageCardGrid";
import NavGrid from "@/components-created/nav-grid/NavGrid";
import SectionContainer from "@/components-web/section-container/SectionContainer";
import WrapperContainer from "@/components-web/wrapper-container/WrapperContainer";
import React from "react";

function Home() {
  return (
    <>
      <SectionContainer categoryName="Nav Widgets">
        <WrapperContainer widgetName="Nav Card">
          <CategoryList />
        </WrapperContainer>
        <WrapperContainer widgetName="Nav Grid">
          <NavGrid />
        </WrapperContainer>
        <WrapperContainer widgetName="Image Card">
          <ImageCardGrid />
        </WrapperContainer>
      </SectionContainer>
    </>
  );
}

export default Home;
