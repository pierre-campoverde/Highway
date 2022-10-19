import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Heading from "components/Atoms/Heading";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhatsappButton from "components/Atoms/WhatsappButton";
import { useIntl } from "react-intl";
const Hero = () => {
  const intl = useIntl();
  return (
    <section className="sm:flex sm:my-20 h-auto justify-center items-center ">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="sm:w-5/12  rounded-2xl "
      >
        <Image
          src={"/Hero.png"}
          layout="responsive"
          width={371}
          height={440}
          alt="Hero image"
          priority
        />
      </motion.div>
      <div className="sm:w-5/12 p-5  align-center rounded-2xl transform -translate-y-10 sm:translate-y-0 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container"
        >
          <Heading
            blackText="Renta un auto de forma"
            redText="fácil, rápida y a un precio competitivo."
          />
          <div className="my-2">
            <p className="text-2xl text-gray-500">
              {intl.formatMessage({ id: "page.home.description" })}
            </p>
          </div>

          <div className="w-full lg:w-6/12 my-5">
            <WhatsappButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
