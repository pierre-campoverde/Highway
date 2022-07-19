import Button from "components/Atoms/Button";
import CarProp from "components/Atoms/CarProp";
import Image from "next/image";
import React from "react";
type Props = {
  model: string;
  transmision: string;
  passengers: number;
  fuel: string;
  imageURL: string;
  callback?: () => void;
};
const myLoader = () => {
  return <div className="w-72 h-40 animate-pulse "></div>;
};
const Card = ({ imageURL, model, transmision, passengers, fuel }: Props) => {
  return (
    <div className=" mx-2 snap-cente bg-white  min-w-max w-72 h-auto rounded-xl shadow-lg	">
      <div className="w-72 bg-white rounded-t-xl overflow-hidden">
        <Image
          loading="lazy"
          loader={() => imageURL}
          src={imageURL}
          alt={model + " to rent in Cancun"}
          layout="responsive"
          width={213}
          height={160}
        />
      </div>
      <div className="w-full flex flex-col p-3 rounded-xl bg-white">
        <p className="text-xl font-semibold">{model}</p>
        <div className="flex w-9/12 justify-between my-2">
          <CarProp propName="Transmisión" value={transmision} />
          <CarProp propName="Pasajeros" value={passengers.toString()} />
        </div>
        <div className="flex my-2">
          <CarProp propName="Combustible" value={fuel} />
        </div>
        <a
          href={`https://wa.me/529981402018?text=Hola,%20quisiera%20rentar%20un%20${model}.`}
          className="text-white bg-customBlue p-2 text-2xl font-gillSansRegular rounded-xl
        hover:bg-gray-200 hover:text-customBlue hover:shadow-lg transition-all text-center"
        >
          Rentar
        </a>
      </div>
    </div>
  );
};

export default Card;
