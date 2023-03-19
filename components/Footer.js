import Map from "../components/Map";
export const Footer = () => {
  let mapSource =
    "https://maps.googleapis.com/maps/api/staticmap?@-6.2170231,106.7660417,17z";
  return (
    <footer class="mt-24 bg-neutral-100  text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div class="py-10 px-12 text-center md:text-left">
        <div class=" grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div class="justify-center">
            <img src="/images/logo.png" alt="logo" class="w-48" />
            <p>
              Jln. Raya Pos Pengumben, Srengseng, Kec Kembangan, Jakarta Barat,
              11630
            </p>
          </div>
          <div class="">
            <Map />
          </div>
        </div>
      </div>
      <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© Karunia Benih Global</span>
      </div>
    </footer>
  );
};
