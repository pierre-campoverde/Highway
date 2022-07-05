import Button from "components/Atoms/Button";
import CarProp from "components/Atoms/CarProp";
import React from "react";
type Props = {
  price: number;
  model: string;
  transmision: string;
  passengers: number;
  fuel: string;
  callback?: () => void;
};
const Card = ({ price, model, transmision, passengers, fuel }: Props) => {
  return (
    <div className="bg-gray-200 mx-2 snap-center  min-w-max w-72 h-auto rounded-xl">
      <div className="w-72 h-40 bg-gray-500 relative rounded-t-xl">
        <div className="p-2 bg-customBlue text-white absolute bottom-0 right-0 m-2 rounded">
          <p className="text-xl">{price}$/dia</p>
        </div>
      </div>
      <div className="w-full flex flex-col p-3">
        <p className="text-xl font-semibold">{model}</p>
        <div className="flex w-9/12 justify-between my-2">
          <CarProp propName="Transmision" value={transmision} />
          <CarProp propName="Pasajeros" value={passengers.toString()} />
        </div>
        <div className="flex my-2">
          <CarProp propName="Combustible" value={fuel} />
        </div>
        <Button type="secondary" label="Rentar" />
      </div>
    </div>
  );
};

export default Card;
