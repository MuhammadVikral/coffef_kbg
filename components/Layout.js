import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Link from "next/link";

export const Layout = ({ navigation, settings, children, isHome, product }) => {
  console.log("isHome:", isHome);
  if (isHome == true) {
    return (
      <section className="align-center justify-center py-24 ">
        <Link href="/">
          <h1 className="mb-24 ml-32 text-4xl font-bold text-white">KBG</h1>
        </Link>
        <main>{children}</main>
      </section>
    );
  } else {
    return (
      <div className="">
        <div className="">{children}</div>
        <Navbar navigation={navigation} product={product} />
        <Footer />
      </div>
    );
  }
};
