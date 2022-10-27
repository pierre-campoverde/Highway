import Button from "components/Atoms/Button";
import CarProp from "components/Atoms/CarProp";
import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";
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
  const intl = useIntl();
  return (
    <div className=" mx-2 snap-cente bg-white  min-w-max w-72 h-auto rounded-xl shadow-lg	">
      <div className="w-72 bg-white rounded-t-xl overflow-hidden">
        <Image
          loading="lazy"
          loader={() => imageURL}
          src={imageURL}
          alt={"Rentar un " + model + " en Cancún."}
          layout="responsive"
          width={213}
          height={160}
          unoptimized
        />
      </div>
      <div className="w-full flex flex-col p-3 rounded-xl bg-white">
        <p className="text-xl font-semibold">{model}</p>
        <div className="flex w-9/12 justify-between my-2">
          <CarProp
            propName={intl.formatMessage({
              id: "component.carCard.transmission",
            })}
            value={transmision}
          />
          <CarProp
            propName={intl.formatMessage({
              id: "component.carCard.passengers",
            })}
            value={passengers.toString()}
          />
        </div>
        <div className="flex my-2">
          <CarProp
            propName={intl.formatMessage({ id: "component.carCard.fuel" })}
            value={fuel}
          />
        </div>
        <a
          href={`https://wa.me/529981225203?text=Hola,%20quisiera%20rentar%20un%20${model}.`}
          className="text-white bg-customBlue p-2 text-2xl font-gillSansRegular rounded-xl
        hover:bg-gray-200 hover:text-customBlue hover:shadow-lg transition-all text-center"
        >
          {intl.formatMessage({ id: "component.carCard.cta" })}
        </a>
      </div>
    </div>
  );
};

export default Card;
