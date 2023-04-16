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
  let isHome = false;
  if (page.data.title[0].text == "HomePage") {
    isHome = true;
  }
  return (
    <div>
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
