import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import ServiceCard from "components/Atoms/ServiceCard";
import Subheading from "components/Atoms/Subheading";
import React from "react";
import { RiMedalFill } from "react-icons/ri";

const Services = () => {
  return (
    <section className="my-10 mx-auto p-2  py-6 container">
      <div className="flex justify-center flex-col sm:flex-row">
        <div className="text-center sm:w-4/12 my-4 px-2 sm:text-left  block">
          <AltHeading label="NUESTROS COCHES" />
          <Subheading redText="red text" blackText="Black text" />
          <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ServiceCard label="Service Name">
            <RiMedalFill />
          </ServiceCard>
          <ServiceCard label="Service Name">
            <RiMedalFill />
          </ServiceCard>
          <ServiceCard label="Service Name">
            <RiMedalFill />
          </ServiceCard>
          <ServiceCard label="Service Name">
            <RiMedalFill />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
