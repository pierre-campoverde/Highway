import React from "react";
type Props = {
  redText: string;
  blackText: string;
};
const Heading = ({ blackText, redText }: Props) => {
  return (
    <h1 className="font-gillSansBold text-4xl">
      <span className="">{blackText}</span>{" "}
      <span className="text-customRed">{redText}</span>
    </h1>
  );
};

export default Heading;
