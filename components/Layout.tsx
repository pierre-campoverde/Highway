import React from "react";
import PrimaryButton from "./Atoms/Button";
type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </>
  );
};

export default Layout;
