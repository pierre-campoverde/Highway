import React from "react";
type Props = {
  content: string;
};
const Body = ({ content }: Props) => {
  return (
    <p className="text-customGray text-lg font-gillSansRegular">{content}</p>
  );
};

export default Body;
