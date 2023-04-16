import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

const StandarNavbarItem = ({ item, onClick }) => {
  return (
    <div onClick={onClick}>
      <li key={prismicH.asText(item.label)} className="p4 ml-5 font-bold">
        <PrismicLink field={item.link}>
          <PrismicText field={item.label} />
        </PrismicLink>
      </li>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProductItem = ({ product }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p4 ml-5 font-bold">Product</Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {product.map((item) => {
          console.log(item);
          let url = "/product/" + item.link.uid;
          return (
            <Menu.Item key={product}>
              {({ active }) => (
                <a
                  key={active}
                  href={url}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item.title}
                </a>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
const MobileNavbarItem = ({ item, onClick }) => {
  return (
    <li onClick={onClick} className="p-4 text-4xl hover:text-gray-500">
      <PrismicLink field={item.link}>
        <PrismicText field={item.label} />
      </PrismicLink>
    </li>
  );
};

const ProductItemMobile = ({ product }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p-4 text-4xl hover:text-gray-500">
        Product
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {product.map((item) => {
          console.log(item);
          let url = "/product/" + item.link.uid;
          return (
            <Menu.Item key={product}>
              {({ active }) => (
                <a
                  href={url}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item.title}
                </a>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
export const Navbar = ({ navigation }) => {
  const [nav, setNav] = useState(false);
  const [pageIndex, setPageIndex] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [textFontHome, setTextFontHome] = useState("font-bold");
  const [hideProduct, setHideProduct] = useState("hidden");
  const product = navigation.data.product_list;
  const handleNav = () => {
    setNav(!nav);
  };
  const handleTab = () => {
    setHideProduct("show");
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
      className="fixed left-0 top-0 z-10 w-full duration-300 ease-in md:px-24"
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
          <StandarNavbarItem
            item={navigation.data.links[0]}
            onClick={() => setPageIndex(0)}
          />
          <ProductItem product={product} />
          <StandarNavbarItem
            item={navigation.data.links[1]}
            onClick={() => setPageIndex(1)}
          />
          <StandarNavbarItem
            item={navigation.data.links[2]}
            onClick={() => setPageIndex(2)}
          />
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
            <MobileNavbarItem
              onClick={handleNav}
              item={navigation.data.links[0]}
            />
            <ProductItemMobile product={product} />
            <MobileNavbarItem
              onClick={handleNav}
              item={navigation.data.links[1]}
            />
            <MobileNavbarItem
              onClick={handleNav}
              item={navigation.data.links[2]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
