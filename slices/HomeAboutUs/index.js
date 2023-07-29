import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.HomeAboutUsSlice} HomeAboutUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeAboutUsSlice>} HomeAboutUsProps
 * @param { HomeAboutUsProps }
 */
const HomeAboutUs = ({ slice }) => {
  const image = slice.primary.image;
  const backgroundImage = slice.primary.background_image;
  return (
    <section className="relative pb-12 text-white">
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover "
        />
      )}
      <div className="mx-8 grid grid-cols-1 items-center justify-end gap-8 pb-12 md:mx-24 md:grid-cols-2">
        <div>
          <RichText
            field={slice.primary.text}
            className="text-center text-white"
          />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div>
              <img
                src={image.url}
                alt={image.alt}
                className="h-1/2 w-full flex-auto rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
