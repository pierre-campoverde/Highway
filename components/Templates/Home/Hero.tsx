import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Heading from "components/Atoms/Heading";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="sm:flex  h-screen justify-center items-center ">
      <div className="sm:w-5/12 h-5/6  bg-heroImage bg-no-repeat bg-cover rounded-2xl "></div>
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
