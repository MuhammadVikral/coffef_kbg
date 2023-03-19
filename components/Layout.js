import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div>
      {children}
      <Navbar navigation={navigation} />
      <Footer />
    </div>
  );
};
