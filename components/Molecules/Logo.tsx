import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={"/Logo.svg"} alt="Highway Logo" width={70} height={70} />
      </a>
    </Link>
  );
};

export default Logo;
