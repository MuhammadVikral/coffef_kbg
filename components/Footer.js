import Map from "../components/Map";
export const Footer = () => {
  let mapSource =
    "https://maps.googleapis.com/maps/api/staticmap?@-6.2170231,106.7660417,17z";
  return (
    <footer className="   bg-gray-50 text-center  text-neutral-600  lg:text-left">
      <div className="py-10 px-12 text-center md:text-left">
        <div className=" grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="justify-center">
            <img src="/images/logo.png" alt="logo" className="w-48" />
            <p>
              Jln. Raya Pos Pengumben, Srengseng, Kec Kembangan, Jakarta Barat,
              11630
            </p>
          </div>
          <div className="">
            <Map />
          </div>
        </div>
      </div>
      <div className=" bg-black p-6 text-center">
        <span>© Karunia Benih Global</span>
      </div>
    </footer>
  );
};
