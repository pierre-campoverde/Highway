import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Subheading from "components/Atoms/Subheading";
import Card from "components/Organisms/Card";
import React from "react";
import data from "../../../data/carsCatalog.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Catalog = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-center my-4 px-2">
        <AltHeading label="NUESTROS COCHES" />
        <Subheading redText="red text" blackText="Black text" />

        <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
      </div>
      <div className="sm:w-11/12 mx-auto flex overflow-auto snap-x scrollbar relative">
        <button className="sticky left-0 text-3xl bg-white top-2/4 rounded-full w-10 hover:bg-black  ">
          <MdKeyboardArrowLeft />
        </button>
        {data.map((car) => (
          <Card
            key={car.model}
            model={car.model}
            fuel={car.fuel}
            transmision={car.transmission}
            passengers={car.passengers}
            price={car.price}
          />
        ))}

        <button className="top-2/4 right-0 text-3xl bg-white sticky rounded-full p-1">
          <MdKeyboardArrowRight />
        </button>
      </div>
      <div className="flex justify-center w-7/12 sm:w-2/12 mx-auto">
        <Button type="terciary" label="Ver mas" />
      </div>
    </section>
  );
};

export default Catalog;
