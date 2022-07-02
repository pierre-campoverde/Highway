import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  to: string;
  size: "text-xl" | "text-lg" | "text-2xl";
};
const Navlink = ({ to, label, size }: Props) => {
  return (
    <Link href={to}>
      <a
        className={`font-gillSansRegular block w-full ${size} p-2 text-gray-400 hover:text-customBlue`}
      >
        {label}
      </a>
    </Link>
  );
};

export default Navlink;
