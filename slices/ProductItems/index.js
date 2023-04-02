import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";
import RichText from "../../components/RichText";
/**
 * @typedef {import("@prismicio/client").Content.ArticleCardsSlice} ArticleCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleCardsSlice>} ArticleCardsProps
 * @param { ArticleCardsProps }
 */
const ImageCard = ({ item }) => {
  const image = item.image;
  const title = item.title;
  const linkNav = "/detail/" + item.link.uid;
  console.log(item.link.uid);
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg duration-500 hover:scale-110 dark:bg-neutral-700">
        <a href={linkNav}>
          <img
            className="w-full cursor-pointer rounded-t-lg object-cover transition "
            src={image.url}
            alt={image.alt}
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <a href={linkNav}>
            <button
              type="button"
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Selengkapnya
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
const ProductItems = ({ slice }) => (
  <Bounded as="section" className="">
    <div className="grid gap-12">
      {prismicH.isFilled.richText(slice.primary.heading) && (
        <Heading className="text-center">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      )}
      <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        {slice.items.map((item) => (
          <ImageCard key={item} item={item} />
        ))}
      </ul>
    </div>
  </Bounded>
);

export default ProductItems;
