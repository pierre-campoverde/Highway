import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Heading from "components/Atoms/Heading";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="sm:flex sm:my-20 h-auto justify-center items-center ">
      <div className="sm:w-5/12 bg-heroImage bg-no-repeat bg-cover rounded-2xl ">
        <Image
          src={"/Hero.png"}
          layout={"responsive"}
          width={600}
          height={600}
          alt="Hero image"
        />
      </div>
      <div className="sm:w-5/12 p-5  align-center rounded-2xl transform -translate-y-10 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container"
        >
          <Heading blackText="Highway" redText="car rental" />
          <div className="my-2">
            <p className="text-2xl text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              animi, officia illo vitae asperiores sed explicabo ipsum veniam.
              Doloremque, facilis!
            </p>
          </div>

          <div className="sm:w-6/12 my-2">
            <Button type="primary" label="CONTACTAR" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
