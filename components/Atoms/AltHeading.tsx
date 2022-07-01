import React from "react";
type Props = {
  label: string;
};
const AltHeading = ({ label }: Props) => {
  return (
    <h3 className="text-customBlue font-gillSansRegular text-xl">
      {label.toUpperCase()}
    </h3>
  );
};

export default AltHeading;
