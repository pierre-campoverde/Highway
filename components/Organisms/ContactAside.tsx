import WhatsappButton from "components/Atoms/WhatsappButton";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactAside = () => {
  return (
    <div className="hidden sm:block w-3/12">
      <div className="border p-3 rounded-3xl mt-12 shadow-md">
        <span className="text-gray-600">
          Para más información acerca de nuestras políticas no dudes en
          contactarnos.
        </span>
        <a
          className="flex  transition-all items-center font-gillSansRegular font-ligth justify-center h-10 mt-2 text-lg p-2  rounded-xl text-white bg-customRed"
          href="https://wa.me/529981225203?text=Hola,%20quisiera%20rentar%20un%20auto."
          target={"_blank"}
          rel="noreferrer"
        >
          <span className="text-2xl mr-2">
            <AiOutlineWhatsApp />
          </span>
          Contactar
        </a>
      </div>
    </div>
  );
};

export default ContactAside;
