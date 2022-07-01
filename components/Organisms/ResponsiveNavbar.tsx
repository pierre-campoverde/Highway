import Navlink from "components/Atoms/Navlink";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  open: boolean;
};
const ResponsiveNavbar = ({ open }: Props) => {
  if (open) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden h-auto flex flex-col text-center bg-white rounded-b-xl border absolute w-full z-10"
      >
        <ul>
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
      </motion.div>
    );
  } else {
    return null;
  }
};

export default ResponsiveNavbar;
