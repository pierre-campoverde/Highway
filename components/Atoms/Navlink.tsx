import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  label: string;
  to: string;
  size: "text-xl" | "text-lg" | "text-2xl";
};
const Navlink = ({ to, label, size }: Props) => {
  const { pathname } = useRouter();
  return (
    <Link href={to}>
      <a
        className={`link block link_leda font-gillSansRegular ${size} ${
          pathname === to ? "text-red-600" : "text-gray-900"
        }`}
        data-text={label}
      >
        <span>{label}</span>
      </a>
    </Link>
  );
};

export default Navlink;
