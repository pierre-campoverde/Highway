import React from "react";
import Footer from "./Organisms/Footer";
import Navbar from "./Organisms/Navbar";
type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
