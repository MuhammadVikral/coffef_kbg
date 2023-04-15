const uttonLink =
          {prismicH.isFilled.link(slice.primary.buttonLink) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicLink>
          )}
#navbar link
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
#usestate navbar
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



const ProductItem = ({ product }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p4 ml-5 font-bold">Product</Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {product.map((item) => {
          console.log(item);
          let url = "/product/" + item.link.uid;
          return (
            <Menu.Item>
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
