import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
type Props = {
  callback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const NavButton = ({ callback }: Props) => {
  return (
    <button
      name="Navbar buton"
      className="md:hidden bg-gray-100
    h-12 w-12 flex
       text-3xl text-customRed
       p-2 rounded-lg cursor-pointer 
       hover:bg9-red-50"
      onClick={callback}
    >
      <RiMenu3Fill />
    </button>
  );
};

export default NavButton;
