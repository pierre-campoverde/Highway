import React from "react";
import Navbar from "./Organisms/Navbar";
type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <p>Footer</p>
    </>
  );
};

export default Layout;
