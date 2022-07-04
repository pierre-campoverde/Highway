import React from "react";
type Prop = {
  propName: string;
  value: string;
};
const CarProp = ({ propName, value }: Prop) => {
  return (
    <div>
      <p className="text-xs font-semibold">{propName}</p>
      <p className="text-gray-700">{value}</p>
    </div>
  );
};

export default CarProp;
