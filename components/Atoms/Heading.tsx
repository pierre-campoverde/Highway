import React from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";
type Props = {
  redText: string;
  blackText: string;
};
const Heading = ({ blackText, redText }: Props) => {
  const intl = useIntl();
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-gillSansBold text-4xl"
    >
      <span className="">
        {intl.formatMessage({ id: "page.home.title-black" })}
      </span>{" "}
      <span className="text-customRed">
        {intl.formatMessage({ id: "page.home.title-red" })}
      </span>
    </motion.h1>
  );
};

export default Heading;
