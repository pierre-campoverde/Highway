import Link from "next/link";
import React from "react";
type Props = {
  label: string;
  to: string;
  size: "xl" | "lg" | "2xl";
};
const Navlink = ({ to, label, size }: Props) => {
  return (
    <Link href={to}>
      <a
        className={`font-gillSansRegular ${
          "text-" + size
        } text-gray-400 hover:text-customBlue`}
      >
        {label}
      </a>
    </Link>
  );
};

export default Navlink;
