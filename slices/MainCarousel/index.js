import React from "react";
import { PrismicNextImage, PrismicRichText } from "@prismicio/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * @typedef {import("@prismicio/client").Content.MainCarouselSlice} MainCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainCarouselSlice>} MainCarouselProps
 * @param { MainCarouselProps }
 */
const MainCarousel = ({ slice }) => {
  return (
    <div className="align-center pt-30  flex  justify-center">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        className="h-[20vh] w-[35vw] rounded-xl"
      >
        {slice?.items.map((item, i) => (
          <div key={item.image.url} className=" flex h-full w-full  ">
            <img
              src={item.image.url}
              alt={item.image.alt}
              class="align-center flex justify-center rounded-xl "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
