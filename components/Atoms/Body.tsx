import React from "react";
type Props = {
  content: string;
};
const Body = ({ content }: Props) => {
  return <p className="text-gray-600 text-2xl font-gillSansLight">{content}</p>;
};

export default Body;
