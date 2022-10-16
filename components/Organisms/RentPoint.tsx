import React from "react";
type Props = {
  topic: string;
  children: JSX.Element[];
};
const RentPoint = ({ topic, children }: Props) => {
  return (
    <div className="py-3 my-2 w-11/12  mx-auto ">
      <h2 className="font-medium text-2xl">{topic}</h2>
      <ul>
        {children.map((point) => (
          <li
            className=" text-xl md:text-base my-2 rounded-xl text-gray-700"
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
