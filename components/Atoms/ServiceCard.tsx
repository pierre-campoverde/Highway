import React from "react";
type Props = {
  children: JSX.Element;
  label: string;
};
const ServiceCard = ({ children, label }: Props) => {
  return (
    <div className="bg-gray-200 w-40 h-40 text-center p-2 rounded-xl  items-center justify-center flex flex-col ">
      <div className="mx-auto text-5xl text-customRed">{children}</div>
      <p className="text-xl font-semibold">{label}</p>
    </div>
  );
};

export default ServiceCard;
