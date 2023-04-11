import React from "react";
import { Button, Grid } from "@nextui-org/react";
import { PrismicLink, PrismicText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.RowButtonSlice} RowButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RowButtonSlice>} RowButtonProps
 * @param { RowButtonProps }
 */
const RowButton = ({ slice }) => {
  return (
    <div className="align-center z-10 mt-12 flex flex-row justify-center gap-8 md:grid-rows-6 md:gap-60">
      <a href={slice.primary.gohome.url}>
        <button className="semibold h-16 w-28  flex-1 rounded border border-gray-400 bg-white text-gray-800 shadow hover:bg-gray-100  md:w-48">
          About Us
        </button>
      </a>
      <a href={slice.primary.gocontact.url}>
        <button className="h-16 w-28 flex-1 rounded border border-gray-400  bg-white font-semibold text-gray-800 shadow hover:bg-gray-100 md:w-48">
          Contact Us
        </button>
      </a>
    </div>
  );
};

export default RowButton;
