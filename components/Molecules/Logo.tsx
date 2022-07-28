import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <Image src={"/Logo.svg"} alt="Highway Logo" width={70} height={70} />
        <div>
          <span className="text-customBlue font-gillSansRegular text-xl">
            Highway
          </span>
          <p className="text-gils font-gillSansLight text-customBlue">
            CAR RENTAL
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
