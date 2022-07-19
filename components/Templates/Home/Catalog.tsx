import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import React from "react";
import Slider from "components/Organisms/Slider";
import Link from "next/link";

const Catalog = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-center  my-4 px-2">
        <AltHeading label="NUESTROS AUTOS" />
        <Subheading blackText="Conoce nuestros " redText="autos disponibles." />

        <Body content="¿Estás listo para comenzar tu viaje?" />
      </div>
      <Slider />
      <div className="flex justify-center w-7/12 sm:w-2/12 mx-auto mt-5">
        {/* //TODO:Set action */}
        <Link href={"/Catalogo"}>
          <a className="border-2 text-customBlue border-customBlue rounded-xl py-3 text-xl px-4  hover:shadow-xl">
            Ver mas
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Catalog;
