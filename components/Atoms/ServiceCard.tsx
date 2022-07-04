import React from "react";
type Props = {
  children: JSX.Element;
  label: string;
};
const ServiceCard = ({ children, label }: Props) => {
  return (
    <div className="bg-gray-200 w-48 h-48 text-center p-4 py-6 rounded-xl flex flex-col items-center justify-center">
      <div className="mx-auto text-5xl text-customRed">{children}</div>
      <p className="text-xl font-semibold">{label}</p>
    </div>
  );
};

export default ServiceCard;
