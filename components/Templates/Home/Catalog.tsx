import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import Subheading from "components/Atoms/Subheading";
import Card from "components/Organisms/Card";
import React from "react";
import data from "../../../data/carsCatalog.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "components/Organisms/Slider";

const Catalog = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-center border my-4 px-2">
        <AltHeading label="NUESTROS COCHES" />
        <Subheading redText="red text" blackText="Black text" />

        <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
      </div>
      <Slider />
      <div className="flex justify-center w-7/12 sm:w-2/12 mx-auto mt-5">
        <Button type="terciary" label="Ver mas" />
      </div>
    </section>
  );
};

export default Catalog;
