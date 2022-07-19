import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Subheading from "components/Atoms/Subheading";
import React from "react";
import Slider from "components/Organisms/Slider";

const Catalog = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-center  my-4 px-2">
        <AltHeading label="NUESTROS AUTOS" />
        <Subheading redText="autos disponibles." blackText="Conoce nuestros " />

        <Body content="¿Estás listo para comenzar tu viaje?" />
      </div>
      <Slider />
      <div className="flex justify-center w-7/12 sm:w-2/12 mx-auto mt-5">
        {/* //TODO:Set action */}
        <Button type="terciary" label="Ver mas" />
      </div>
    </section>
  );
};

export default Catalog;
