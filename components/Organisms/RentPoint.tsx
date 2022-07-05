import React from "react";
type Props = {
  topic: string;
  content: string;
};
const RentPoint = ({ topic, content }: Props) => {
  return (
    <div className="py-3 my-2 w-11/12 sm:w-6/12 mx-auto ">
      <p className="text-customRed text-2xl">{topic}</p>
      <p className="text-gray-600 text-xl">{content}</p>
    </div>
  );
};

export default RentPoint;
