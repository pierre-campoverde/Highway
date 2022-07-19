import React from "react";
type Props = {
  topic: string;
  children: JSX.Element[];
};
const RentPoint = ({ topic, children }: Props) => {
  return (
    <div className="py-3 my-2 w-11/12 sm:w-6/12 mx-auto ">
      <h2 className="text-customRed text-2xl">{topic}</h2>
      <ul>
        {children.map((point) => (
          <li
            className="my-3 bg-gray-100 text-xl md:text-base p-3 rounded-xl text-gray-700"
            key={children.indexOf(point)}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentPoint;
