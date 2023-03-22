import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Map from "../components/Map";
import Link from "next/link";

export const Layout = ({ navigation, settings, children, isHome }) => {
  console.log("isHome:", isHome);
  if (isHome == true) {
    return (
      <section classname="align-center justify-center py-24 ">
        <Link href="/">
          <h1 className="mb-24 ml-32 text-4xl font-bold text-white">KBG</h1>
        </Link>
        <main>{children}</main>
      </section>
    );
  } else {
    return (
      <div classname="">
        <div class="">{children}</div>
        <Navbar navigation={navigation} />
        <Footer />
      </div>
    );
  }
};
