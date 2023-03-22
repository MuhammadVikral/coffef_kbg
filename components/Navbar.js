import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export const Navbar = ({ navigation }) => {
  const [nav, setNav] = useState(false);
  const [pageIndex, setPageIndex] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [textFontHome, setTextFontHome] = useState("font-bold");

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 z-10 w-full px-24 duration-300 ease-in"
    >
      <div className="  flex items-center justify-between p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="text-4xl font-bold">
            KBG
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden text-lg sm:flex"
        >
          {navigation.data?.links.map((item, index) => {
            let fontstyle = "font-bold";
            return (
              <div onClick={() => setPageIndex({ index })}>
                <li
                  key={prismicH.asText(item.label)}
                  className="p4 ml-5 font-bold"
                >
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              </div>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="z-10 block sm:hidden">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Product</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
