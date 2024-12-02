import CategoryList from "@/components-created/category-list/CategoryList";
import CtaBanner from "@/components-created/cta-banner/CtaBanner";
import CtaRow from "@/components-created/cta-row/CtaRow";
import ImageCardGrid from "@/components-created/image-card/image-card-grid/ImageCardGrid";
import ImageCardSlider from "@/components-created/image-card/image-card-slider/ImageCardSlider";
import ImageGallery from "@/components-created/image-gallery/ImageGallery";
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
        <WrapperContainer widgetName="Image Card Grid">
          <ImageCardGrid />
        </WrapperContainer>
        <WrapperContainer widgetName="Image Card Slider">
          <ImageCardSlider />
        </WrapperContainer>
        <WrapperContainer className="fw-w75" widgetName="Image Gallery">
          <ImageGallery />
        </WrapperContainer>
        <WrapperContainer className="fw-w50" widgetName="CTA Banner">
          <CtaBanner />
        </WrapperContainer>
        <WrapperContainer widgetName="CTA Row">
          <CtaRow />
        </WrapperContainer>
      </SectionContainer>
    </>
  );
}

export default Home;
