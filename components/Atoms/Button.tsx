import React from "react";
type Props = {
  type: "primary" | "secondary" | "terciary";
  label: string;
};
const Button = ({ type, label }: Props) => {
  if (type === "primary") {
    return (
      <button
        className={`text-white bg-customRed p-3 font-gillSansRegular rounded-xl`}
      >
        {label}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        className={`text-white bg-customBlue p-3 font-gillSansRegular rounded-xl`}
      >
        {label}
      </button>
    );
  } else if (type === "terciary") {
    return (
      <button
        className={`text-white bg-white border border-2 border-customBlue p-3 font-gillSansRegular rounded-xl text-customBlue`}
      >
        {label}
      </button>
    );
  } else {
    return <p>Error rendering</p>;
  }
};

export default Button;
