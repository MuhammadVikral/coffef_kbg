import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";

import { Bounded } from "../../components/Bounded";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
        <div>
          <RichText field={slice.primary.text} className="text-left" />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div className="bg-gray-100">
              <img
                src={image.url}
                alt={image.alt}
                className="h-3/6 w-full rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
