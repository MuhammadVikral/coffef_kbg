import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Link from "next/link";

export const Layout = ({ navigation, settings, children, isHome }) => {
  console.log("isHome:", isHome);
  if (isHome == true) {
    return (
      <div
        className="bg-black  bg-repeat px-8 py-12 "
        style={{
          backgroundImage: `url('/images/bgblack.jpg')`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <Link href="/">
          <h1 className="mb-8 text-4xl font-bold text-white md:ml-16">KBG</h1>
        </Link>
        <main>{children}</main>
        <div className="bottom-12 right-24 mt-12 flex justify-end align-bottom text-white">
          © Karunia Benih Global
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="">{children}</div>
        <Navbar navigation={navigation} />
        <Footer />
      </div>
    );
  }
};
