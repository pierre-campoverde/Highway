import { useRouter } from "next/router";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
const WhatsappButton = () => {
  return (
    <a
      className="flex shadow-2xl shadow-rose-700 transition-all items-center font-gillSansRegular justify-center h-14 text-2xl p-2 w-full rounded-xl text-white bg-customRed hover:bg-rose-700"
      href=""
      target={"_blank"}
      rel="noreferrer"
    >
      <span className="text-4xl mr-2">
        <AiOutlineWhatsApp />
      </span>
      CONTACTAR
    </a>
  );
};

export default WhatsappButton;
