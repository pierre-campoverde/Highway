import React, { Children } from "react";
type Props = {
  children: JSX.Element;
  title: string;
  description: string;
};
const ServiceCard = ({ children, title, description }: Props) => {
  return (
    <div className="bg-gray-200 rounded-xl w-80 m-4 flex flex-col items-center p-3 py-4 ">
      <div className="bg-customRed text-white p-5 rounded-full inline-block text-4xl">
        {children}
      </div>
      <div className="mt-5 text-center">
        <p className="text-xl font-semibold font-gillSans">{title}</p>
        <p className="text-lg text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
