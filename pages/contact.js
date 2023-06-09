import { createClient } from "../prismicio";
import { components } from "../slices";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const page = ({ navigation, settings, products }) => {
  return (
    <div
      className="bg-black bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('/images/bgblack.jpg')`,
      }}
    >
      <ContactForm products={products} />
      <Navbar navigation={navigation} />
      <Footer />
    </div>
  );
};
export default page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const products = await client.getAllByType("product_item_detail", {
    lang: locale,
  });

  return {
    props: {
      navigation,
      settings,
      products,
    },
  };
}
