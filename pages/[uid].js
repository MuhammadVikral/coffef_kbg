import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Page = ({ page, navigation, settings }) => {
  let isHome = false;
  if (page.data.title[0].text == "HomePage") {
    isHome = true;
  }
  return (
    <div
      className="bg-black  bg-cover bg-no-repeat pt-24"
      style={{
        backgroundImage: `url('/images/bgblack.jpg')`,
      }}
    >
      <Layout navigation={navigation} settings={settings} isHome={isHome}>
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

  const page = await client.getByUID("page", params.uid, { lang: locale });
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

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
