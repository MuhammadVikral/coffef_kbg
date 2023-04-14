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
