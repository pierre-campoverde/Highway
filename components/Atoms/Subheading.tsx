import React from "react";

type Props = {
  redText: string;
  blackText: string;
};

const Subheading = ({ redText, blackText }: Props) => {
  return (
    <h2 className="text-3xl font-gillSansBold">
      <span>{blackText}</span> <span className="text-customRed">{redText}</span>
    </h2>
  );
};

export default Subheading;
