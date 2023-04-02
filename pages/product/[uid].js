import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio.js";
import { components } from "../../slices/";
import { Layout } from "../../components/Layout";

const Page = ({ page, navigation, settings, product }) => {
  console.log("product:", product);
  return (
    <div
      className="bg-black  bg-cover bg-no-repeat pt-24"
      style={{
        backgroundImage: `url('/images/bgblack.jpg')`,
      }}
    >
      <Layout navigation={navigation} settings={settings} product={product}>
        <Head>
          <title>
            {prismicH.asText(page.data.title)} |{" "}
            {prismicH.asText(settings.data.siteTitle)}
          </title>
        </Head>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("product_items", params.uid, {
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

  const pages = await client.getAllByType("product_items", { lang: "*" });

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
