import NavButton from "components/Atoms/NavButton";
import Logo from "components/Molecules/Logo";
import Image from "next/image";
import React, { useState } from "react";
import Navlink from "../Atoms/Navlink";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(!menuOpen);
  };
  const outsideClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between px-4 py-2 ">
          <Logo />
          <ul className="hidden md:flex">
            <li className="m-4">
              <Navlink size="text-xl" label="Inicio" to="/" />
            </li>
            <li className="m-4">
              <Navlink size="text-xl" label="Catalogo" to="/Catalogo" />
            </li>
            <li className="m-4">
              <Navlink size="text-xl" label="Contacto" to="/Contacto" />
            </li>
            <li className="m-4">
              <Navlink
                size="text-xl"
                label="Politicas de renta"
                to="/PoliticasRenta"
              />
            </li>
            <li className="m-4">
              <Navlink size="text-xl" label="FAQ" to="/PreguntasFrecuentes" />
            </li>
          </ul>
          <NavButton callback={toggleMenu} />
        </div>
        <ResponsiveNavbar
          open={menuOpen}
          callback={toggleMenu}
          outsideClick={outsideClick}
        />
      </div>
    </>
  );
};

export default Navbar;
