import React from "react";
type Props = {
  type: "primary" | "secondary" | "terciary";
  label: string;
};
const Button = ({ type, label }: Props) => {
  if (type === "primary") {
    return (
      <button
        className={`text-white bg-customRed w-full p-2 text-2xl  font-gillSansRegular rounded-xl`}
      >
        {label}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        className={`text-white bg-customBlue p-2 text-2xl font-gillSansRegular rounded-xl`}
      >
        {label}
      </button>
    );
  } else if (type === "terciary") {
    return (
      <button
        className={`text-customBlue bg-white border p-2 text-2xl border-2 border-customBlue p-3 font-gillSansRegular rounded-xl text-customBlue`}
      >
        {label}
      </button>
    );
  } else {
    return null;
  }
};

export default Button;
