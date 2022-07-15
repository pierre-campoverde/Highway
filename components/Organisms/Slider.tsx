import Button from "components/Atoms/Button";
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Card from "./Card";
import data from "../../data/carsCatalog.json";

const Slider = () => {
  const slider = useRef<HTMLDivElement>(null);
  const slideLeft = (): void => {
    slider.current!.scrollLeft += 300;
  };
  const slideRight = (): void => {
    slider.current!.scrollLeft -= 300;
  };
  return (
    <div className="relative  rounded-3xl">
      <button
        onClick={slideRight}
        className="absolute left-5 z-10 text-3xl opacity-50 hover:opacity-100 bg-white top-2/4 rounded-full p-4 hover:drop-shadow-lg "
      >
        <MdKeyboardArrowLeft />
      </button>
      <div
        ref={slider}
        className="sm:w-11/12 mx-auto flex overflow-x-auto py-5 scroll-smooth scrollbar"
      >
        {data.map((car) => (
          <Card
            key={car.model}
            imageURL={car.imageURL}
            model={car.model}
            fuel={car.fuel}
            transmision={car.transmission}
            passengers={car.passengers}
          />
        ))}
      </div>
      <button
        onClick={slideLeft}
        className="absolute right-5 p-4 text-3xl opacity-50 hover:opacity-100 bg-white top-2/4 rounded-full  hover:drop-shadow-lg  "
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Slider;
