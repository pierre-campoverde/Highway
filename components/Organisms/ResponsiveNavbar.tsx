import Navlink from "components/Atoms/Navlink";
import React from "react";
import { motion } from "framer-motion";
import CloseNavButton from "components/Atoms/CloseNavButton";
import AltHeading from "components/Atoms/AltHeading";
type Props = {
  open: boolean;
  callback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outsideClick: () => void;
};
const ResponsiveNavbar = ({ open, callback, outsideClick }: Props) => {
  if (open) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden h-screen top-0 flex w-full rounded-b-xl fixed w-full z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className=" w-auto p h-full bg-black  w-2/12"
          onClick={outsideClick}
        ></motion.div>
        <nav className="bg-white p-5 w-10/12 h-full flex flex-col">
          <div className=" flex items-center justify-between">
            <div>
              <AltHeading label="Highway" />
              <AltHeading label="Car rental" />
            </div>
            <CloseNavButton callback={callback} />
          </div>
          <ul className="mx-auto  w-full mt-24">
            <li className="my-6">
              <Navlink size="text-2xl" label="Inicio" to="/" />
            </li>
            <li className="my-6 w-full">
              <Navlink size="text-2xl" label="Catalogo" to="/Catalogo" />
            </li>
            <li className="my-6">
              <Navlink size="text-2xl" label="Contacto" to="/Contacto" />
            </li>
            <li className="my-6">
              <Navlink
                size="text-2xl"
                label="Politicas de renta"
                to="/PoliticasRenta"
              />
            </li>
            <li className="my-6">
              <Navlink size="text-2xl" label="FAQ" to="/PreguntasFrecuentes" />
            </li>
          </ul>
        </nav>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default ResponsiveNavbar;
