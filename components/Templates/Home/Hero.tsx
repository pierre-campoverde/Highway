import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Heading from "components/Atoms/Heading";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhatsappButton from "components/Atoms/WhatsappButton";
const Hero = () => {
  return (
    <section className="sm:flex sm:my-20 h-auto justify-center items-center ">
      <div className="sm:w-5/12  rounded-2xl ">
        <Image
          src={"/Hero.png"}
          layout="responsive"
          width={371}
          height={440}
          alt="Hero image"
        />
      </div>
      <div className="sm:w-5/12 p-5  align-center rounded-2xl transform -translate-y-10 sm:translate-y-0 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container"
        >
          <Heading
            blackText="Renta un coche de forma"
            redText="fácil, rápida y personalizada."
          />
          <div className="my-2">
            <p className="text-2xl text-gray-500">
              Somo tu solución rápida y sin trabas para rentar un coche en
              Cancún. Adquiérelo en cualquier momento de forma fácil y
              personalizada y ¡Disfruta de tu viaje!
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
