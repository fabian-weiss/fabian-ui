import CategoryList from "@/components-created/category-list/CategoryList";
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
      </SectionContainer>
    </>
  );
}

export default Home;
