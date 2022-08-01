import React from "react";
type Prop = {
  propName: string;
  value: string;
};
const CarProp = ({ propName, value }: Prop) => {
  return (
    <div>
      <span className="text-xs font-semibold">{propName}</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
};

export default CarProp;
