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
        autoPlay={true}
        showStatus={false}
        className=" align-center w-[34.5vw] justify-center rounded-xl"
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
