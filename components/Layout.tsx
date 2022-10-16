import React from "react";
import { LanguageButton } from "./Molecules/LanguageButton";
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
      <LanguageButton />
      <Footer />
    </>
  );
};

export default Layout;
