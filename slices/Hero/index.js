import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading
      as="h2"
      size="xl"
      className="mb-4 mt-12 h-screen first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative  bg-slate-900 text-white">
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-60"
        />
      )}
      <Bounded yPadding="lg" className="relative ">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
