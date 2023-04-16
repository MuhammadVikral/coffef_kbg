import React from "react";
import clsx from "clsx";
import { PrismicNextImage, PrismicRichText } from "@prismicio/react";
import { Carousel } from "react-responsive-carousel";
import { PrismicText } from "@prismicio/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as prismicH from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.MainCarouselSlice} MainCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainCarouselSlice>} MainCarouselProps
 * @param { MainCarouselProps }
 */
const MainCarousel = ({ slice }) => {
  return (
    <div className="align-center flex flex-col justify-center gap-8">
      <div className="align-center flex   flex-1 justify-center  pt-2 text-white">
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          className=" w-[85vw] rounded-xl"
        >
          {slice?.items.map((item, i) => (
            <img
              src={item.image.url}
              alt={item.image.alt}
              className="w-full rounded-xl object-cover md:h-[55vh]"
            />
          ))}
        </Carousel>
      </div>
      <div>
        {prismicH.isFilled.richText(slice.primary.quote) && (
          <p
            className={clsx(
              "text-m font-medium italic leading-tight text-white md:px-24 md:text-2xl md:leading-tight",
              !prismicH.isFilled.keyText(slice.primary.source) && "text-center"
            )}
          >
            <span className="select-none text-slate-400">&rdquo; </span>
            <PrismicText field={slice.primary.quote} />
            <span className="select-none text-slate-400"> &rdquo;</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MainCarousel;
