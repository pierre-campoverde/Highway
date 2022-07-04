import React from "react";
type Props = {
  content: string;
};
const Body = ({ content }: Props) => {
  return <p className="text-gray-500 text-2xl ">{content}</p>;
};

export default Body;
