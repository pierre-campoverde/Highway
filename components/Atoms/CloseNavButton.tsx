import React from "react";
import { RiCloseFill } from "react-icons/ri";
type Props = {
  callback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const CloseNavButton = ({ callback }: Props) => {
  return (
    <button
      name="Cerrar menu"
      className="sm:hidden bg-gray-100
    h-12 w-12 flex
       text-3xl text-customRed
       p-2 rounded-lg cursor-pointer 
       hover:bg9-red-50"
      onClick={callback}
    >
      <RiCloseFill />
    </button>
  );
};

export default CloseNavButton;
