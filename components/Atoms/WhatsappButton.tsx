import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useIntl } from "react-intl";
const WhatsappButton = () => {
  const intl = useIntl();
  return (
    <a
      className="flex shadow-2xl shadow-rose-700 transition-all items-center font-gillSansRegular justify-center h-14 text-2xl p-2 w-full rounded-xl text-white bg-customRed hover:bg-rose-700"
      href="https://wa.me/5219981035129?text=Hola,%20quisiera%20rentar%20un%20auto."
      target={"_blank"}
      rel="noreferrer"
    >
      <span className="text-4xl mr-2">
        <AiOutlineWhatsApp />
      </span>
      {intl.formatMessage({ id: "component.button.whatsapp" }).toUpperCase()}
    </a>
  );
};

export default WhatsappButton;
