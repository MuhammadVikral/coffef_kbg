import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.TilingWordImageSlice} TilingWordImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TilingWordImageSlice>} TilingWordImageProps
 * @param { TilingWordImageProps }
 */
const TilingWordImageOdd = ({ item, color }) => (
  <div className="align-center grid w-screen grid-cols-1 justify-center md:grid-cols-2">
    <img
      src={item.image.url}
      alt={item.image.alt}
      className="h-full w-full flex-1 object-cover "
    />
    <div
      className="flex items-center justify-center p-8 align-middle text-xl duration-500 hover:scale-110"
      style={{
        background: `${color}`,
      }}
    >
      {/* <span className="... inline-block align-middle text-white">...</span> */}
      <RichText field={item.description} className="text-center  text-white" />
    </div>
  </div>
);
const TilingWordImageEven = ({ item, color }) => (
  <div className="align-center grid w-screen grid-cols-1 justify-center md:grid-cols-2">
    <div
      className="flex items-center justify-center p-8 align-middle duration-500 hover:scale-110 "
      style={{
        background: `${color}`,
      }}
    >
      {/* <span className="... inline-block align-middle text-white">...</span> */}
      <RichText
        field={item.description}
        className="text-center  text-xl text-white "
      />
    </div>{" "}
    <img
      src={item.image.url}
      alt={item.image.alt}
      className="h-full w-full flex-1 object-cover "
    />
  </div>
);

const TilingWordImageSlice = ({ slice }) => {
  console.log("slice.primary.text_background:", slice.primary.text_background);
  var isOdd = function (x) {
    return x & 1;
  };
  return (
    <div className="align-center w-screen justify-center">
      {slice.items.map((item, index) => {
        let isodd = isOdd(index);
        if (isodd == 0)
          return (
            <TilingWordImageOdd
              key={item.image.url}
              item={item}
              color={slice.primary.text_background}
            />
          );
        else
          return (
            <TilingWordImageEven
              key={item.image.url}
              item={item}
              color={slice.primary.text_background}
            />
          );
      })}
    </div>
  );
};

export default TilingWordImageSlice;
