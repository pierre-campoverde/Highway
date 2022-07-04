import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import ServiceCard from "components/Molecules/ServiceCard";
import React from "react";
import { AiFillCar } from "react-icons/ai";

const RentProcess = () => {
  return (
    <section className="mx-auto container ">
      <div className="text-center my-4 px-2">
        <AltHeading label="COMO RENTAR" />
        <Subheading redText="rapido" blackText="Proceso agil y " />
        <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        <ServiceCard
          title="Choose a location"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        >
          <AiFillCar />
        </ServiceCard>
        <ServiceCard
          title="Step 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        >
          <AiFillCar />
        </ServiceCard>
        <ServiceCard
          title="Step 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        >
          <AiFillCar />
        </ServiceCard>
      </div>
    </section>
  );
};

export default RentProcess;
