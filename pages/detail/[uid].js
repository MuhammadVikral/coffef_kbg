import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio.js";
import { Layout } from "../../components/Layout";
import { components } from "../../slices/";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ItemDetailCarousel } from "./ItemDetailCarousel";
import { ItemValue } from "./ItemValue";
import { PopupButton } from "./PopupButton";
import Link from "next/link";
import Popup from "reactjs-popup";
const Page = ({ page, navigation, settings, product }) => {
  let items = page.data.image;
  return (
    <section className="relative">
      <div
        className="  bg-black bg-cover bg-no-repeat py-24"
        style={{
          backgroundImage: `url('/images/bgblack.jpg')`,
        }}
      >
        <Navbar navigation={navigation} product={product} />
        <div className="grid gap-x-4  md:grid-cols-[max-content_1fr] md:px-24">
          <ItemDetailCarousel items={items} />
          <ItemValue item={page.data} />
          <PopupButton />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("product_item_detail", params.uid, {
    lang: locale,
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const product = await client.getSingle("products_list", { lang: locale });
  return {
    props: {
      page,
      navigation,
      settings,
      product,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("product_item_detail", { lang: "*" });
  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
