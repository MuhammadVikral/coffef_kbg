import { Header } from "./Header";
import { Navbar } from "./Navbar";
// import { Navbar } from "@nextui-org/react";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <section className="section relative bg-white">
      <div className="absolute inset-0">
        {children}
        <div className="absolute inset-0 bg-white bg-opacity-75  mix-blend-multiply" />
      </div>
      <Navbar />
    </section>
  );
};
