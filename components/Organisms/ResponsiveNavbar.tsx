import Navlink from "components/Atoms/Navlink";
import React from "react";
import { motion } from "framer-motion";
import CloseNavButton from "components/Atoms/CloseNavButton";
type Props = {
  open: boolean;
  callback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const ResponsiveNavbar = ({ open, callback }: Props) => {
  if (open) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden h-screen top-0 flex w-full rounded-b-xl fixed w-full z-10"
      >
        <nav className="bg-white w-10/12 h-full ">
          <div>
            <CloseNavButton callback={callback} />
          </div>
          <ul className="mx-auto border p-5">
            <li className="my-4">
              <Navlink size="2xl" label="Inicio" to="/" />
            </li>
            <li className="my-4">
              <Navlink size="2xl" label="Catalogo" to="/Catalogo" />
            </li>
            <li className="my-4">
              <Navlink size="2xl" label="Contacto" to="/Contacto" />
            </li>
            <li className="my-4">
              <Navlink
                size="2xl"
                label="Politicas de renta"
                to="/PoliticasRenta"
              />
            </li>
            <li className="my-4">
              <Navlink size="2xl" label="FAQ" to="/PreguntasFrecuentes" />
            </li>
          </ul>
        </nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className=" w-auto h-full bg-black  w-2/12"
        ></motion.div>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default ResponsiveNavbar;
