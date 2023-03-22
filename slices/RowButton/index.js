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
    <section class="flex pl-[30vw] pt-[35vh] ">
      <Grid.Container>
        <Grid class="">
          <a href={slice.primary.gohome.url} class="mr-[15vw]">
            <button class="h-[7vh] w-[10vw] rounded border border-gray-400 bg-white   font-semibold text-gray-800 shadow hover:bg-gray-100">
              About Us
            </button>
          </a>
        </Grid>
        <Grid>
          <a href={slice.primary.gocontact.url}>
            <button class="h-[7vh] w-[10vw] rounded border border-gray-400 bg-white   font-semibold text-gray-800 shadow hover:bg-gray-100">
              Contact Us
            </button>
          </a>
        </Grid>
      </Grid.Container>
    </section>
  );
};

export default RowButton;
