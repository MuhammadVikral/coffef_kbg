import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ItemDetailCarousel = ({ items }) => {
  return (
    <div className="w-full">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={true}
        dynamicHeight={false}
        showStatus={false}
        className=" align-center w-full justify-center rounded-xl px-8 md:w-[34.5vw]"
      >
        {items.map((item, i) => (
          <div key={item.image.url} className=" flex h-full w-full  ">
            <img
              src={item.image.url}
              alt={item.image.alt}
              className="align-center flex justify-center rounded-xl "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
