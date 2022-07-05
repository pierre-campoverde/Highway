import React from "react";
import { motion } from "framer-motion";
type Props = {
  redText: string;
  blackText: string;
};
const Heading = ({ blackText, redText }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-gillSansBold text-4xl"
    >
      <span className="">{blackText}</span>{" "}
      <span className="text-customRed">{redText}</span>
    </motion.h1>
  );
};

export default Heading;
