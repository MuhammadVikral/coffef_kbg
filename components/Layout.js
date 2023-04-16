import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Link from "next/link";

export const Layout = ({ navigation, settings, children, isHome }) => {
  console.log("isHome:", isHome);
  if (isHome == true) {
    return (
      <div
        className="grid-col-2  relative  flex h-screen flex-col justify-start bg-black bg-repeat px-8 py-12"
        style={{
          backgroundImage: `url('/images/bgblack.jpg')`,
          backgroundRepeat: "repeat",
        }}
      >
        <Link href="/">
          <h1 className=" mb-8 flex text-4xl font-bold text-white md:ml-16">
            KBG
          </h1>
        </Link>
        <div className="grow justify-center  align-middle">{children}</div>
        <div className="bottom-12 right-24 mb-4 flex justify-end align-bottom text-white">
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
