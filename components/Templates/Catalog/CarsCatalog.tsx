import Card from "components/Organisms/Card";
import React from "react";
import data from "../../../data/carsCatalog.json";
const CarsCatalog = () => {
  return (
    <section className="container my-10 mx-auto">
      <div className="flex flex-wrap justify-center">
        {data.map((car) => (
          <div className="m-1 sm:m-4" key={car.model}>
            <Card
              key={car.model}
              model={car.model}
              transmision={car.transmission}
              fuel={car.fuel}
              passengers={car.passengers}
              price={car.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarsCatalog;
