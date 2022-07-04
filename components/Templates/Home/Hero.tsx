import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Heading from "components/Atoms/Heading";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="sm:flex my-10 justify-center items-center">
      <div className="sm:w-5/12 h-full">
        <Image
          src={"/Hero.png"}
          alt="Highway car"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
      <section className="sm:w-5/12 p-5  align-center rounded-2xl transform -translate-y-10 bg-white">
        <div className="container">
          <Heading blackText="Highway" redText="car rental" />
          <div className="my-2">
            <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra fringilla lectus, et feugiat magna convallis et. Praesent congue orci eget dui gravida, eu laoreet massa tristique." />
          </div>

          <div className="sm:w-6/12 my-2">
            <Button type="primary" label="CONTACTAR" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
