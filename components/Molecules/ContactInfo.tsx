import React, { Children } from "react";
type Props = {
  children: JSX.Element | JSX.Element[];
  href: string;
  label: string;
};
const ContactInfo = ({ children, href, label }: Props) => {
  return (
    <a
      href={href}
      className="flex items-center w-full text-xl text-gray-800 p-2 mt-2 rounded-lg bg-gray-200 hover:bg-gray-300"
      target={"_blank"}
      rel={"noreferrer"}
    >
      {children}
      {label}
    </a>
  );
};

export default ContactInfo;
