import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {
  to: string;
  id: string;
  size: "text-xl" | "text-lg" | "text-2xl";
};
const Navlink = ({ to, id, size }: Props) => {
  const intl = useIntl();
  const { pathname } = useRouter();
  return (
    <Link href={to}>
      <a
        className={`link block  font-gillSansRegular ${size} ${
          pathname === to ? "text-red-600" : "text-gray-500 link_leda"
        }`}
        data-text={intl.formatMessage({ id: id })}
      >
        <span>
          <FormattedMessage id={id} />
        </span>
      </a>
    </Link>
  );
};

export default Navlink;
