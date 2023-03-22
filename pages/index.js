import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
// import { Layout } from "../components/FloatingLayout";
import { Layout } from "../components/Layout";
import { RichText } from "../components/RichText";
import { PrismicNextImage } from "@prismicio/next";

const Index = ({ page, navigation, settings }) => {
  let slice = page.data.slices;
  let bgImage = slice[0].primary.backgroundImage;
  let isHome = false;
  console.log("isHome:", page.data.title[0].text);
  if (page.data.title[0].text == "HomePage") {
    isHome = true;
  }
  return (
    <div
      class="h-screen bg-black bg-cover py-12 px-12"
      style={{
        backgroundImage: `url('/images/bgblack.jpg')`,
      }}
    >
      <Layout navigation={navigation} settings={settings} isHome={isHome}>
        <Head>
          <title>{prismicH.asText(page.data.title)}</title>
        </Head>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "homepage", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
