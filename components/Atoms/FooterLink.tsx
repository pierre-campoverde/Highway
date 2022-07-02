import Link from "next/link";
import React from "react";
type Props = {
  to: string;
  label: string;
};
const FooterLink = ({ to, label }: Props) => {
  return (
    <Link href={to}>
      <a className="font-gillSansLight text-xl block ">{label}</a>
    </Link>
  );
};

export default FooterLink;
