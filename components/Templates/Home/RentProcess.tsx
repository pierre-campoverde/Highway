import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import StepCard from "components/Molecules/StepCard";
import React from "react";
import { AiFillCar } from "react-icons/ai";

const RentProcess = () => {
  return (
    <section className="mx-auto container py-10">
      <div className="text-center my-4 px-2">
        <AltHeading label="COMO RENTAR" />
        <Subheading redText="rapido" blackText="Proceso agil y " />
        <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        <StepCard
          title="Choose a location"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        >
          <AiFillCar />
        </StepCard>
        <StepCard
          title="Step 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        >
          <AiFillCar />
        </StepCard>
        <StepCard
          title="Step 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        >
          <AiFillCar />
        </StepCard>
      </div>
    </section>
  );
};

export default RentProcess;
